import { Service } from 'egg';

class EposideService extends Service {
	async query({ page, size, sortBy, sortOrder, animate, comic }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		animate && (query.animate = animate);
		comic && (query.comic = comic);

		const result = await this.ctx.model.Eposide.find(query)
			.skip(skip)
			.limit(limit)
			.sort({ [sortBy]: sortOrder, _id: -1 });

		const total = await this.ctx.model.Eposide.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Eposide.findById(id);
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Eposide.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const result = await this.ctx.model.Eposide.updateMany({ _id: { $in: ids } }, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const result = await this.ctx.model.Eposide.deleteMany({
			_id: { $in: ids }
		});
		return result;
	}
}

export default EposideService;
