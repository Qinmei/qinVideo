import { Service } from 'egg';

class RateService extends Service {
	async query({ page, size, sortBy, sortOrder }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};

		const result = await this.ctx.model.Rate.find(query)
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate('author')
			.populate('target');

		const total = await this.ctx.model.Rate.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const result = this.ctx.model.Rate.findById(id)
			.populate('author')
			.populate('target');
		return result;
	}

	async exsit(author: string, target: string) {
		const result = await this.ctx.model.Rate.findOne({ author, target });
		return result;
	}

	async create(data: any) {
		const exist = await this.exsit(data.author, data.target);
		if (exist) return 29005;

		const result = await this.ctx.model.Rate.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Rate.updateMany(query, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Rate.deleteMany(query);
		return result;
	}
}

export default RateService;
