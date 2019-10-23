import { Service } from 'egg';

class ComicService extends Service {
	async query({ page, size, sortBy, sortOrder, name, status, update }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		name && (query.title = { $regex: name, $options: '$i' });
		status && (query.status = status);
		update && (query.isUpdate = update);

		const result = await this.ctx.model.Comic.find(query)
			.skip(skip)
			.limit(limit)
			.sort({ [sortBy]: sortOrder, _id: -1 });

		const total = await this.ctx.model.Comic.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Comic.findById(id);
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Comic.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const result = await this.ctx.model.Comic.updateMany({ _id: { $in: ids } }, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const result = await this.ctx.model.Comic.deleteMany({
			_id: { $in: ids }
		});
		return result;
	}
}

export default ComicService;
