import * as fs from 'fs';
import * as path from 'path';
import { Service } from 'egg';

interface ConfigInfo {
    pcIndex: string[];
    animeIndex: string[];
    comicIndex: string[];
    h5Index: string[];
    _id: string;
}

class ConfigService extends Service {
    async info() {
        const data = await this.ctx.model.Config.findOne({});
        return data;
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
                newDiscuss: 1,
                newShop: 1,
                allAnimate: 1,
                allComic: 1,
                allPost: 1,
                pcMenu: 1,
                pcIndex: 1,
                animeIndex: 1,
                animeMenu: 1,
                comicIndex: 1,
                comicMenu: 1,
                postMenu: 1,
                postIndex: 1,
                h5Menu: 1,
                h5Index: 1,
                aboutus: 1,
            }
        ).populate('postIndex');

        const arr = ['pcIndex', 'animeIndex', 'comicIndex', 'h5Index'];
        const list = [...result.pcIndex, ...result.animeIndex, ...result.comicIndex, ...result.h5Index].filter(
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
        const config = await this.info();
        if (config) {
            await this.destroy();
        }

        const result = await this.ctx.model.Config.create(data);
        if (result) {
            this.generate();
        }
        return result;
    }

    async destroy() {
        const result = await this.ctx.model.Config.deleteMany({});
        return result;
    }

    async generate() {
        const result = await this.simpleInfo();
        ['animates'].map((item) => {
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

            fs.writeFile(indexHtml, newHtml, 'utf8', function(err) {
                if (err) console.log(err);
            });

            const config = path.join(__dirname, `../../public/${item}/config.${result._id}.js`);

            fs.writeFile(config, `window.config=${JSON.stringify(result)}`, 'utf8', function(err) {
                if (err) console.log(err);
            });
        });
    }
}

export default ConfigService;
