import { Service } from 'egg';

class PostService extends Service {
	async query({ page, size, sortBy, sortOrder, status, title, kind, tag }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		title && (query.title = { $regex: title, $options: '$i' });
		status && (query.status = status);
		kind && (query.kind = kind);
		tag && (query.tag = tag);

		const result = await this.ctx.model.Post.find(query)
			.populate('countPlay')
			.populate('countLike')
			.populate('countComment')
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate({ path: 'author', select: 'name avatar level introduce background' })
			.populate('kind')
			.populate('tag');

		const total = await this.ctx.model.Post.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Post.findById(id)
			.populate('countPlay')
			.populate('countLike')
			.populate('countComment')
			.populate({ path: 'author', select: 'name avatar level introduce background' })
			.populate('kind')
			.populate('tag');
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Post.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Post.updateMany(query, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Post.deleteMany(query);
		return result;
	}
}

export default PostService;
