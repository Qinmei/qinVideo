import { Service } from 'egg';

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
        const data = await this.ctx.model.Eposide.findById(id)
            .populate('target')
            .populate('coutPlay')
            .populate('coutComment')
            .populate('coutDanmu');
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

    async animateInfo(id: string, level: number) {
        const data = await this.ctx.model.Eposide.findById(id)
            .populate({
                path: 'target',
                select: 'title slug coverVertical introduce playType noPrefix level linkPrefix',
            })
            .populate('coutPlay')
            .populate('coutComment')
            .populate('coutDanmu');

        if (!data.target._id) return 18001;

        const config = await this.ctx.service.config.info();

        if (data.noSetPrefix) {
            return data;
        }
        let prefix = '';
        if (data.target.noPrefix) {
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
                const configPrefix = config.playLimit
                    .filter((item: any) => item.level <= level)
                    .sort((a, b) => b.level - a.level)[0];
                if (configPrefix) {
                    const { prefix, key, expired } = configPrefix;
                    data.link.map((item: any) => {
                        const uri = configPrefix.prefix + prefix + item.value;
                        let playLink = '/';
                        if (/http/.test(uri)) {
                            playLink =
                                playLink +
                                uri
                                    .split('/')
                                    .slice(3)
                                    .join('/');
                        } else {
                            playLink =
                                playLink +
                                uri
                                    .split('/')
                                    .slice(1)
                                    .join('/');
                        }

                        item.value = uri + this.ctx.helper.generateSecurePathHash(playLink, expired, key);
                    });
                } else {
                    data.link.map((item: any) => (item.value = prefix + item.value));
                }
            }
        } else {
            data.link.map((item: any) => (item.value = prefix + item.value));
        }

        data.target = {
            title: data.target.title,
            slug: data.target.slug,
            coverVertical: data.target.coverVertical,
            introduce: data.target.introduce,
        };

        return data;
    }
}

export default EposideService;
