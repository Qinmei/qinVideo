import { Service } from 'egg';

class CloudService extends Service {
	async query({ page, size, sortBy, sortOrder, title }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		title && (query.title = { $regex: title, $options: '$i' });

		const result = await this.ctx.model.Cloud.find(query)
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit);

		result.map(async (item: any) => {
			const isExist = await this.existLocal(item.slug, item.type);
			item.exist = !!isExist;
		});

		for (let i = 0; i < result.length; i++) {
			const isExist = await this.existLocal(result[i].slug, result[i].type);
			result[i].exist = !!isExist;
		}

		const total = await this.ctx.model.Cloud.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async list(ids: Array<string>) {
		const query = { _id: { $in: ids } };
		const result = await this.ctx.model.Cloud.find(query);
		return result;
	}

	async create(data: any) {
		const result = await this.ctx.model.Cloud.create(data);
		return result;
	}

	async destroy(ids: Array<string>) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Cloud.deleteMany(query);
		return result;
	}

	async import(source: string, hour: number) {
		this.service.maccms.list({ source, hour });
		return true;
	}

	async existLocal(slug: string, type: string) {
		const result = await this.ctx.model[type].findOne({ slug });
		return result;
	}

	async saveToLocal(data: any) {
		const result = await this.ctx.model[data.type].create(data);
		const { eposide = [] } = data;

		eposide.map((item) => {
			item.target = result._id;
			item.onModel = data.type;
		});

		const eposideData = await this.ctx.service.eposide.create(eposide).catch(() => false);
		if (!eposideData) {
			await this.destroy([result._id]);
		}

		return eposideData;
	}

	async updateToLocal(data: any) {
		const result = await this.existLocal(data.slug, data.type);
		const { eposide = [] } = data;

		const existEposide = await this.ctx.service.eposide.query({ target: result._id });

		if (existEposide.total >= eposide.length) {
			await this.ctx.model[data.type].updateOne({ slug: data.slug }, { $set: data });
		} else {
			for (let index = 0; index < eposide.length; index++) {
				const item = eposide[index];
				if (!existEposide.list.some((ele: any) => ele.title === item.title)) {
					item.target = result._id;
					item.onModel = data.type;
					await this.ctx.service.eposide.create(eposide);
				}
			}
		}

		return result;
	}

	async save(ids: Array<string>) {
		const data = await this.list(ids);

		const result = {
			total: data.length,
			success: 0,
			error: 0
		};

		for (let index = 0; index < data.length; index++) {
			const ele = data[index];
			const exist = await this.existLocal(ele.slug, ele.type);

			try {
				if (exist) {
					await this.saveToLocal(ele);
				} else {
					await this.updateToLocal(ele);
				}
				result.success++;
			} catch (error) {
				result.error++;
			}

			await this.ctx.header.sleep(1000);
		}

		return result;
	}

	async settingInfo() {
		const data = await this.ctx.model.CloudSetting.findOne();
		const { history } = data;

		if (history && history.length > 100) {
			history.length = 100;
		}

		if (data.process) {
			const process = JSON.parse(data.process);

			if (process.time) {
				const time = new Date(process.time).getTime();
				const now = new Date().getTime();

				if (now - time > 1000 * 3600) {
					history.unshift(data.process);
					data.process = '';
					await this.settingCreate(data);
				}
			}
		}

		return data;
	}

	async settingCreate(data: any) {
		const exist = await this.settingInfo();

		let result;
		if (exist) {
			result = await this.ctx.model.CloudSetting.update({}, { $set: data });
		} else {
			result = await this.ctx.model.CloudSetting.create(data);
		}

		return result;
	}
}

export default CloudService;
