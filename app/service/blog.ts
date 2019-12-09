import { Service } from 'egg';

class BlogService extends Service {
	async query({ page, size, sortBy, sortOrder, title, target, status, pin, hot }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		title && (query.content = { $regex: title, $options: '$i' });
		status && (query.status = status);
		target && (query.target = target);
		pin && (query.pin = pin === 'true');
		hot && (query.hot = hot === 'true');

		const result = await this.ctx.model.Blog.find(query)
			.populate('countPlay')
			.populate('countLike')
			.populate('countComment')
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate('target')
			.populate('tag')
			.populate({ path: 'author', select: 'name avatar level introduce background' });

		const total = await this.ctx.model.Blog.find(query).countDocuments();

		return {
			list: result,
			total,
		};
	}

	async info(id: string) {
		const result = await this.ctx.app.model.Blog.findById(id)
			.populate('countPlay')
			.populate('countLike')
			.populate('countComment')
			.populate('target')
			.populate('tag')
			.populate({ path: 'author', select: 'name avatar level introduce background' });
		return result;
	}

	async create(data: any) {
		const result = await this.ctx.model.Blog.create(data);
		return result;
	}

	async update(ids: string[], data: any) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Blog.updateMany(query, { $set: data });
		return result;
	}

	async destroy(ids: string[]) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Blog.deleteMany(query);
		return result;
	}
}

export default BlogService;
