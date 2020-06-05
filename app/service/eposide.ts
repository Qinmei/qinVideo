import { Service } from 'egg';
import * as path from 'path';
import * as fs from 'fs';
import * as request from 'request-promise';

class EposideService extends Service {
    async query({ target }) {
        const query = { target };

        const result = await this.ctx.model.Eposide.find(query).sort({ sort: 1, _id: -1 });
        const total = await this.ctx.model.Eposide.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Eposide.findById(id).populate('target').populate('count');

        const { play = 0, view = 0, comment = 0, danmu = 0 } = data.count || {};
        data.countPlay = play + view;
        data.countDanmu = danmu;
        data.countComment = comment;
        delete data.count;
        return data;
    }

    async create(data: any) {
        const result = await this.ctx.model.Eposide.create(data);
        return result;
    }

    async insertMany(data: any[]) {
        const result = await this.ctx.model.Eposide.insertMany(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const result = await this.ctx.model.Eposide.updateMany({ _id: { $in: ids } }, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const result = await this.ctx.model.Eposide.deleteMany({
            _id: { $in: ids },
        });
        return result;
    }

    async simpleQuery(target: string) {
        const result = await this.ctx.model.Eposide.find({ target }, { title: 1, cover: 1, sort: 1 }).sort({
            sort: 1,
            _id: -1,
        });
        return result;
    }

    async animateInfo(id: string, level: number) {
        let result = await this.service.utils.cacheGet(`animatePlay${id}`);

        if (!result) {
            result = await this.ctx.model.Eposide.findById(id)
                .populate({
                    path: 'target',
                    select: 'title slug coverVertical introduce playType noPrefix level linkPrefix',
                })
                .populate('count');

            if (result.target._id) {
                this.service.utils.cacheSet(`animatePlay${id}`, result);
            }
        }

        if (!result.target._id) return 18001;

        const data = JSON.parse(JSON.stringify(result));

        data.eposides = await this.simpleQuery(data.target._id);

        if (level < data.target.level) {
            delete data.link;
            delete data.target.level;
            delete data.target.noPrefix;
            delete data.target.linkPrefix;
            delete data.target.playType;
            delete data.noSetPrefix;
            data.levelLimit = true;
            return data;
        }

        const config = await this.ctx.service.config.cacheInfo();

        if (data.noSetPrefix) {
            return data;
        }
        let prefix = '';
        if (!data.target.noPrefix) {
            prefix = data.target.linkPrefix || '';
        }
        if (config) {
            if (data.target.playType === 'php') {
                data.link.map((ele: any) => {
                    const configPrefix = config.jiexi.filter((item: any) => {
                        const pattern = new RegExp(item.pattern);
                        return pattern.test(item + prefix);
                    })[0];
                    ele.value = configPrefix ? configPrefix.prefix : '' + prefix + ele.value;
                });
            } else {
                const configPrefixArray = config.playLimit
                    .filter((item: any) => item.level <= level)
                    .sort((a, b) => b.level - a.level);

                if (configPrefixArray.length > 0) {
                    const newConfigPrefixArr = configPrefixArray.filter(
                        (item) => item.level === configPrefixArray[0].level
                    );
                    const configPrefix = newConfigPrefixArr[Math.floor(Math.random() * newConfigPrefixArr.length)];

                    const { key, expired } = configPrefix;
                    data.link.map((item: any) => {
                        const uri = configPrefix.prefix + prefix + item.value;
                        item.value = this.ctx.helper.generateSecurePathHash(uri, expired, key);
                    });
                } else {
                    data.link.map((item: any) => (item.value = prefix + item.value));
                }
            }
        } else {
            data.link.map((item: any) => (item.value = prefix + item.value));
        }

        const { play = 0, view = 0, comment = 0, danmu = 0 } = data.count || {};
        data.countPlay = play + view;
        data.countDanmu = danmu;
        data.countComment = comment;

        delete data.count;
        delete data.target.level;
        delete data.target.noPrefix;
        delete data.target.linkPrefix;
        delete data.noSetPrefix;

        return data;
    }

    async comicInfo(id: string, level: number) {
        const result = await this.ctx.model.Eposide.findById(id)
            .populate({
                path: 'target',
                select: 'title slug coverVertical introduce playType noPrefix level linkPrefix',
            })
            .populate('count');

        if (!result.target._id) return 18001;

        const data = JSON.parse(JSON.stringify(result));

        data.eposides = await this.simpleQuery(data.target._id);

        if (level < data.target.level) {
            delete data.link;
            delete data.target.level;
            delete data.target.noPrefix;
            delete data.target.linkPrefix;
            delete data.target.playType;
            delete data.noSetPrefix;
            delete data.onModel;
            data.levelLimit = true;
            return data;
        }

        const config = await this.ctx.service.config.cacheInfo();

        const dataConfig = {
            prefix: '',
            expired: '',
            key: 3600,
        };
        if (!data.noSetPrefix) {
            dataConfig.prefix = data.target.linkPrefix || '';
        }

        if (config && config.playLimit) {
            const configPrefix = config.playLimit
                .filter((item: any) => item.level <= level)
                .sort((a, b) => b.level - a.level)[0];

            if (configPrefix) {
                dataConfig.prefix = configPrefix.prefix || '' + dataConfig.prefix;
                dataConfig.expired = configPrefix.expired || 3600;
                dataConfig.key = configPrefix.key || '';
            }
        }

        if (data.target.playType === 'local') {
            const folder = data.link[0];
            if (folder && folder.value) {
                const dirPath = path.join(__dirname, `../../public/picture${dataConfig.prefix + folder.value}`);

                let pictures: string[] = [];
                if (fs.existsSync(dirPath)) {
                    pictures = fs
                        .readdirSync(dirPath)
                        .map((item: string) => `/picture${dataConfig.prefix + folder.value}/${item}`);
                }

                data.link = pictures.map((item: any, index) => {
                    const uri = dataConfig.prefix + item.value;

                    return {
                        name: index + 1,
                        value: item + this.ctx.helper.generateSecurePathHash(uri, dataConfig.expired, dataConfig.key),
                    };
                });
            }
        } else if (data.target.playType === 'image') {
            data.link = data.link.map((item: any) => ({
                ...item,
                value: this.ctx.helper.generateSecurePathHash(
                    dataConfig.prefix + item.value,
                    dataConfig.expired,
                    dataConfig.key
                ),
            }));
        } else if (data.target.playType === 'api') {
            const folder = data.link[0];
            if (folder && folder.value) {
                const url = dataConfig.prefix + folder.value;

                const options = {
                    method: 'get',
                    uri: url,
                    json: true,
                };
                const result = await request(options);

                data.link = result.data;
            }
        }

        const { play = 0, view = 0, comment = 0, danmu = 0 } = data.count || {};
        data.countPlay = play + view;
        data.countDanmu = danmu;
        data.countComment = comment;

        delete data.count;
        delete data.target.level;
        delete data.target.noPrefix;
        delete data.target.linkPrefix;
        delete data.noSetPrefix;
        delete data.onModel;

        return data;
    }
}

export default EposideService;
