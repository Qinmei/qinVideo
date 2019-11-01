import { Service } from 'egg';

class CommentService extends Service {
	async query({ page, size, sortBy, sortOrder, title, target, status }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		title && (query.content = { $regex: title, $options: '$i' });
		status && (query.status = status);
		target && (query.target = target);

		const result = await this.ctx.model.Comment.find(query)
			.populate('countLike')
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate({ path: 'target', select: '_id title' })
			.populate({ path: 'author', select: 'name avatar level introduce background' })
			.populate({
				path: 'replyTo',
				select: 'name avatar level introduce background'
			});

		const total = await this.ctx.model.Comment.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async list({ page, size, sortBy, sortOrder, title, target, status }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {
			parent: null
		};
		title && (query.content = { $regex: title, $options: '$i' });
		status && (query.status = status);
		target && (query.target = target);

		const result = await this.ctx.model.Comment.find(query)
			.populate('countLike')
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate({ path: 'target', select: '_id title' })
			.populate({
				path: 'children',
				populate: [
					{
						path: 'author',
						select: 'name avatar level introduce background'
					},
					{
						path: 'countLike'
					},
					{
						path: 'replyTo',
						select: 'name avatar level introduce background'
					}
				]
			})
			.populate({ path: 'author', select: 'name avatar level introduce background' });

		const total = await this.ctx.model.Comment.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Comment.findById(id)
			.populate('countLike')
			.populate({ path: 'target', select: '_id title' })
			.populate({
				path: 'children',
				populate: [
					{
						path: 'author',
						select: 'name avatar level introduce background'
					},
					{
						path: 'countLike'
					},
					{
						path: 'replyTo',
						select: 'name avatar level introduce background'
					}
				]
			})
			.populate({ path: 'author', select: 'name avatar level introduce background' });
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Comment.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Comment.updateMany(query, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Comment.deleteMany(query);
		return result;
	}
}

export default CommentService;
