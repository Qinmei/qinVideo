import * as fs from 'fs';
import * as path from 'path';
import { Service } from 'egg';

class ConfigService extends Service {
	async info() {
		const data = this.ctx.model.Config.findOne({});
		return data;
	}

	async simpleInfo() {
		const data = this.ctx.model.Config.findOne(
			{},
			{
				favcion: 1, // ico
				name: 1, // 网站名
				slogan: 1, // 标语
				information: 1, // 简介
				tongji: 1, // 百度统计代码
				color: 1, // 主题色
				qq: 1, // qq群链接
				email: 1, // 邮箱
				app: 1, // app
				logo: 1, // 网站logo
				headimg: 1, // 首页头图
				mobleimg: 1, // 手机头图
				loginimg: 1, // 登陆大图
				avatar: 1, // 默认头像图
				background: 1, // 默认背景图
				dplayer: 1, // 默认dplayer的背景图
				newAnimate: 1, // 新番
				newComic: 1, // 新漫
				newDiscuss: 1, // 讨论区
				newShop: 1, // 商品
				allAnimate: 1, // 所有番剧
				allComic: 1, // 所有漫画
				allPost: 1, // 所有文章
				pcMenu: 1, // web菜单
				pcIndex: 1, // web首页
				h5Menu: 1, // mobile菜单
				h5Index: 1, // mobile首页
				postMenu: 1, //动态文章分类置顶
				postTop: 1, // 动态文章置顶
				message: 1, // 系统通知
				aboutus: 1
			}
		);
		return data;
	}

	async create(data: any) {
		const config = await this.info();
		if (config) {
			await this.destroy();
		}

		const result = await this.ctx.model.Config.create(data);
		if (result) {
			this.generate(result);
		}
		return result;
	}

	async destroy() {
		const result = await this.ctx.model.Config.deleteMany({});
		return result;
	}

	async generate(result: any) {
		['pc'].map((item) => {
			const configPath = path.join(__dirname, `../public/${item}/`);
			fs.readdir(configPath, (error, files) => {
				if (error) throw error;

				const file = files.filter((name) => /config\.[^]*js/.test(name));
				file.forEach((name) => fs.unlinkSync(configPath + name));
			});

			const indexHtml = path.join(__dirname, `../public/${item}/index.html`);

			const html = fs.readFileSync(indexHtml, { encoding: 'utf8' });
			let newHtml = html;

			newHtml = html.replace(/config\.[^]{0,30}js/, `config.${result._id}.js`);

			fs.writeFile(indexHtml, newHtml, 'utf8', function(err) {
				if (err) console.log(err);
			});

			const config = path.join(__dirname, `../public/${item}/config.${result._id}.js`);

			fs.writeFile(config, `window.config=${JSON.stringify(result)}`, 'utf8', function(err) {
				if (err) console.log(err);
			});
		});
	}
}

export default ConfigService;
