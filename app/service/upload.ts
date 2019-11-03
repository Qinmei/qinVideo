import { Service } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

class UploadsService extends Service {
	async saveFile(file: any, dirPath: string, typePath: string) {
		const fileHash = await this.ctx.service.utils.md5(file.filepath);

		let fileName = fileHash;
		const fileExt = path.extname(file.filename);
		const name = `${fileName}${fileExt}`;
		const reader = await fs.createReadStream(file.filepath);
		const upStream = await fs.createWriteStream(dirPath + `/${name}`);
		await reader.pipe(upStream);
		file.path = `/img/${typePath}/${name}`;
		return file;
	}

	// 上传文件
	async uploadImg(files: Array<any>, type: string) {
		const typePath = ['animate', 'post', 'comment', 'avatar', 'background', 'config', 'others'].includes(type)
			? type
			: 'others';
		const dirPath = path.join(__dirname, '../public/img') + `/${typePath}`;
		!fs.existsSync(dirPath) && (await fs.mkdirSync(dirPath));

		const result: Array<any> = [];
		for (let index = 0; index < files.length; index++) {
			const item = files[index];
			const ele = await this.saveFile(item, dirPath, typePath);
			result.push(ele);
		}

		if (result.some((item) => !item)) return 25000;

		return result;
	}

	// 管理图片列表
	async queryImg(type: string, query: any) {
		const typePath = ['animate', 'comic', 'post', 'comment', 'avatar', 'background', 'config', 'others'].includes(type)
			? type
			: 'others';
		const dirPath = path.join(__dirname, `../public/img/${typePath}`);
		!fs.existsSync(dirPath) && fs.mkdirSync(dirPath);
		const data = fs.readdirSync(dirPath).map((item) => {
			const info = fs.statSync(dirPath + '/' + item);
			return {
				name: `/img/${typePath}/${item}`,
				...info
			};
		});
		const { page, size, title, sortBy, sortOrder } = query;

		const filter = (a, b) => (sortOrder > 0 ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]);
		const reg = new RegExp(title);
		const start = (page - 1) * size;
		const end = page * size;
		const newData = data
			.filter((ele) => reg.test(ele.name))
			.sort(filter)
			.slice(start, end);

		return {
			list: newData,
			total: data.length
		};
	}

	// 删除图片
	async deleteImg(ids: Array<string>) {
		ids.map((item) => {
			const filePath = path.join(__dirname, '../public') + `${item}`;
			fs.exists(filePath, () => {
				fs.unlinkSync(filePath);
			});
		});

		return true;
	}
}

export default UploadsService;
