import { Service } from 'egg';

class OrderService extends Service {
	async query({ page, size, sortBy, sortOrder, title }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		title && (query._id = { $in: [title] });

		const result = await this.ctx.model.Danmu.find(query)
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate('shop')
			.populate('user');

		const total = await this.ctx.model.Danmu.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Danmu.findById(id)
			.populate('shop')
			.populate('user');
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Danmu.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Danmu.updateMany(query, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Danmu.deleteMany(query);
		return result;
	}
}

export default OrderService;
