import { Service } from 'egg';

class CategoryService extends Service {
	async query({ page, size, sortBy, sortOrder, type }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		type && (query.type = type);

		const result = await this.ctx.model.Category.find(query)
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit);

		const total = await this.ctx.model.Category.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Category.findById(id);
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Category.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const result = await this.ctx.model.Category.updateMany({ _id: { $in: ids } }, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const result = await this.ctx.model.Category.deleteMany({
			_id: { $in: ids }
		});
		return result;
	}
}

export default CategoryService;
