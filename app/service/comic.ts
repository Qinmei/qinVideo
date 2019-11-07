import { Service } from 'egg';

class ComicService extends Service {
	async query({ page, size, sortBy, sortOrder, title, status, update, area, year, kind, tag }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		title && (query.title = { $regex: title, $options: '$i' });
		status && (query.status = status);
		update && (query.isUpdate = update);
		area && (query.area = area);
		year && (query.year = year);
		kind && (query.kind = kind);
		tag && (query.tag = tag);

		const result = await this.ctx.model.Comic.find(query)
			.populate('countPlay')
			.populate('countLike')
			.populate('countComment')
			.populate('countEposide')
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate({ path: 'author', select: 'name avatar level introduce background' })
			.populate('area')
			.populate('kind')
			.populate('year')
			.populate('tag')
			.populate({ path: 'seasons', select: 'slug season -_id' });

		const total = await this.ctx.model.Comic.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Comic.findById(id)
			.populate('countPlay')
			.populate('countLike')
			.populate('countComment')
			.populate({ path: 'author', select: 'name avatar level introduce background' })
			.populate('area')
			.populate('kind')
			.populate('year')
			.populate('tag');
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Comic.create(data);
		return result;
	}

	async import(data: any) {
		const result = await this.create(data);

		const { eposide = [] } = data;

		eposide.map((item) => {
			item.target = result._id;
			item.onModel = 'Comic';
		});

		const eposideData = await this.ctx.service.eposide.create(eposide);

		return eposideData;
	}

	async update(ids: Array<string>, data: any) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Comic.updateMany(query, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Comic.deleteMany(query);
		return result;
	}
}

export default ComicService;
