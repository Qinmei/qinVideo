import { Service } from 'egg';

class ReportService extends Service {
	async query({ page, size, sortBy, sortOrder, content, status, name }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		content && (query.content = { $regex: content, $options: '$i' });
		status && (query.status = status);
		name && (query._id = { $in: [name] });

		const result = await this.ctx.model.Report.find(query)
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit)
			.populate('author')
			.populate('target');

		const total = await this.ctx.model.Report.find(query).countDocuments();

		return {
			list: result,
			total
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Report.findById(id)
			.populate('author')
			.populate('target');
		return data;
	}

	async create(data: any) {
		const result = await this.ctx.model.Report.create(data);
		return result;
	}

	async update(ids: Array<string>, data: any) {
		const result = await this.ctx.model.Report.updateMany({ _id: { $in: ids } }, { $set: data });
		return result;
	}

	async destroy(ids: Array<string>) {
		const result = await this.ctx.model.Report.deleteMany({
			_id: { $in: ids }
		});
		return result;
	}
}

export default ReportService;
