import { Service } from 'egg';

class AnimateService extends Service {
	async query({ page, size, sortBy, sortOrder, name, status, update }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		name && (query.title = { $regex: name, $options: '$i' });
		status && (query.status = status);
		update && (query.isUpdate = update);

		const result = await this.ctx.model.Animate.find(query)
			.skip(skip)
			.limit(limit)
			.populate({ path: 'author', select: 'name avatar level introduce' })
			.populate('coutPlay')
			.sort({ [sortBy]: sortOrder, _id: -1 });

		const total = await this.ctx.model.Animate.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Animate.findById(id);
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Animate.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const result = await this.ctx.model.Animate.updateMany({ _id: { $in: ids } }, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const result = await this.ctx.model.Animate.deleteMany({
			_id: { $in: ids }
		});
		return result;
	}
}

export default AnimateService;
