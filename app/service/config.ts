import * as fs from 'fs';
import * as path from 'path';
import { Service } from 'egg';

interface ConfigInfo {
    pcIndex: string[];
    animateIndex: string[];
    comicIndex: string[];
    h5Index: string[];
    _id: string;
}

class ConfigService extends Service {
    async info() {
        const data = await this.ctx.model.Config.findOne({});
        return data;
    }

    async cacheInfo() {
        const { service } = this.ctx;
        const configCache = await service.utils.cacheGet('config');
        if (configCache) return configCache;

        const data = await this.info();
        data && (await this.cacheSync(data));
        return data;
    }

    async cacheSync(data) {
        const { service } = this.ctx;
        await service.utils.cacheSet('config', data);
    }

    async simpleInfo() {
        const result: ConfigInfo = await this.ctx.model.Config.findOne(
            {},
            {
                favcion: 1,
                name: 1,
                slogan: 1,
                information: 1,
                tongji: 1,
                color: 1,
                qq: 1,
                email: 1,
                app: 1,
                logo: 1,
                headimg: 1,
                mobleimg: 1,
                loginimg: 1,
                avatar: 1,
                background: 1,
                dplayer: 1,
                newAnimate: 1,
                newComic: 1,
                allAnimate: 1,
                allComic: 1,
                allPost: 1,
                pcMenu: 1,
                pcIndex: 1,
                animateIndex: 1,
                animateMenu: 1,
                comicIndex: 1,
                comicMenu: 1,
                postMenu: 1,
                postIndex: 1,
                h5Menu: 1,
                h5Index: 1,
                aboutus: 1,
                message: 1,
                usePicInterface: 1,
                picInterface: 1,
            }
        ).populate('postIndex');

        const arr = ['pcIndex', 'animateIndex', 'comicIndex', 'h5Index'];
        const list = [...result.pcIndex, ...result.animateIndex, ...result.comicIndex, ...result.h5Index].filter(
            (item: string) => !/new/.test(item)
        );

        const cates = await this.service.category.list(list);

        arr.map((item: any) => {
            if (!result[item]) result[item] = [];
            result[item] = result[item].map((ele: string) => {
                const filters = cates.filter((single: any) => single.id === ele);
                return filters.length > 0 ? JSON.stringify(filters[0]) : ele;
            });
        });
        return result;
    }

    async create(data: any) {
        const result = await this.ctx.model.Config.create(data);
        if (result) {
            this.generate();
            this.cacheSync(result);
        }
        return result;
    }

    async destroy() {
        const result = await this.ctx.model.Config.deleteMany({});
        return result;
    }

    async generate() {
        const result = await this.simpleInfo();
        ['animate', 'comic', 'post', 'search', 'user', 'mobile', 'default'].map((item) => {
            const configPath = path.join(__dirname, `../../public/${item}/`);
            fs.readdir(configPath, (error, files) => {
                if (error) throw error;

                const file = files.filter((name) => /config\.[^]*js/.test(name));
                file.forEach((name) => fs.unlinkSync(configPath + name));
            });

            const indexHtml = path.join(__dirname, `../../public/${item}/index.html`);

            const html = fs.readFileSync(indexHtml, { encoding: 'utf8' });
            let newHtml = html;

            newHtml = html.replace(/config\.[^]{0,30}js/, `config.${result._id}.js`);

            fs.writeFile(indexHtml, newHtml, 'utf8', (err) => {
                if (err) console.log(err);
            });

            const config = path.join(__dirname, `../../public/${item}/config.${result._id}.js`);

            fs.writeFile(config, `window.config=${JSON.stringify(result)}`, 'utf8', (err) => {
                if (err) console.log(err);
            });
        });
    }

    async home(type: string) {
        const result: ConfigInfo = await this.ctx.model.Config.findOne({}, { [type]: 1 });

        const list = result[type].filter((item: string) => !/new/.test(item));

        const cates = await this.service.category.list(list);

        const newResult = result[type].map((ele: string) => {
            const filters = cates.filter((single: any) => single.id === ele);
            return filters.length > 0 ? JSON.stringify(filters[0]) : ele;
        });

        const handlResult = this.ctx.helper.indexInit(newResult);

        const final = {};

        for (const item of handlResult) {
            const { query, origin, type } = this.ctx.helper.indexTrans(item);
            const data = await this.ctx.service[type].query(query);
            final[origin] = data;
        }

        return final;
    }

    async appInfo() {
        const result: ConfigInfo = await this.ctx.model.Config.findOne(
            {},
            {
                appversion: 1,
                updateLogs: 1,
                downLink: 1,
                qqAppLink: 1,
                qqWebLink: 1,
                qqNumber: 1,
            }
        );
        return result;
    }
}

export default ConfigService;
