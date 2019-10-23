import { Service } from 'egg';

class HistoryService extends Service {
	async query({ page, size, sortBy, sortOrder, author }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		author && (query.author = author);

		const result = await this.ctx.model.History.find(query)
			.skip(skip)
			.limit(limit)
			.sort({ [sortBy]: sortOrder, _id: -1 });

		const total = await this.ctx.model.History.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.History.findById(id);
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.History.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const result = await this.ctx.model.History.updateMany({ _id: { $in: ids } }, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const result = await this.ctx.model.History.deleteMany({
			_id: { $in: ids }
		});
		return result;
	}
}

export default HistoryService;
