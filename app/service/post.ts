import { Service } from 'egg';

class PostService extends Service {
	async query({ page, size, sortBy, sortOrder, status, name }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		name && (query.title = { $regex: name, $options: '$i' });
		status && (query.status = status);

		const result = await this.ctx.model.Post.find(query)
			.skip(skip)
			.limit(limit)
			.sort({ [sortBy]: sortOrder, _id: -1 });

		const total = await this.ctx.model.Post.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Post.findById(id);
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Post.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const result = await this.ctx.model.Post.updateMany({ _id: { $in: ids } }, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const result = await this.ctx.model.Post.deleteMany({
			_id: { $in: ids }
		});
		return result;
	}
}

export default PostService;
