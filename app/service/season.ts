import { Service } from 'egg';

class SeasonService extends Service {
	async query({ target }) {
		const query = { target };

		const result = await this.ctx.model.Season.find(query).sort({ sort: 1, _id: -1 });
		const total = await this.ctx.model.Season.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Season.findById(id);
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Season.create(data);
		return result;
	}

	async insertMany(data: Array<any>) {
		const result = await this.ctx.model.Season.insertMany(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Season.updateMany(query, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Season.deleteMany(query);
		return result;
	}
}

export default SeasonService;
