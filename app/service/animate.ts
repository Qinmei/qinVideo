import { Service } from 'egg';

class AnimateService extends Service {
	async query({ page, size, sortBy, sortOrder, title, status, update, area, kind, tag, year }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		title && (query.title = { $regex: title, $options: '$i' });
		status && (query.status = status);
		update && (query.isUpdate = update === 'true');
		area && (query.area = area);
		year && (query.year = year);
		kind && (query.kind = kind);
		tag && (query.tag = tag);

		const result = await this.ctx.model.Animate.find(query)
			.populate('countPlay')
			.populate('countLike')
			.populate('countComment')
			.populate('countDanmu')
			.populate('countEposide')
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate({ path: 'author', select: 'name avatar level introduce background' })
			.populate('area')
			.populate('kind')
			.populate('year')
			.populate('tag');

		const total = await this.ctx.model.Animate.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Animate.findById(id)
			.populate('countPlay')
			.populate('countLike')
			.populate('countComment')
			.populate('countDanmu')
			.populate({ path: 'author', select: 'name avatar level introduce background' })
			.populate('area')
			.populate('kind')
			.populate('year')
			.populate('tag');
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Animate.create(data);
		return result;
	}

	async import(data: any) {
		const result = await this.create(data);

		const { eposide = [] } = data;

		eposide.map((item) => {
			item.target = result._id;
			item.onModel = 'Animate';
		});

		const eposideData = await this.ctx.service.eposide.create(eposide).catch(() => false);

		if (!eposideData) {
			await this.destroy([result._id]);
		}

		return eposideData;
	}

	async update(ids: Array<string>, data: any) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Animate.updateMany(query, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Animate.deleteMany(query);
		return result;
	}
}

export default AnimateService;
