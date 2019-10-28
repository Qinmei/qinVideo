import { Service } from 'egg';

class CommentService extends Service {
	async query({ page, size, sortBy, sortOrder, name, target, status }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {
			parent: null
		};
		name && (query.content = { $regex: name, $options: '$i' });
		status && (query.status = status);
		target && (query.target = target);

		const result = await this.ctx.model.Comment.find(query)
			.populate('coutLike')
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate('target')
			.populate('children');

		const total = await this.ctx.model.Comment.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Comment.findById(id)
			.populate('coutLike')
			.populate('target')
			.populate('children');
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Comment.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const result = await this.ctx.model.Comment.updateMany({ _id: { $in: ids } }, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const result = await this.ctx.model.Comment.deleteMany({
			_id: { $in: ids }
		});
		return result;
	}
}

export default CommentService;
