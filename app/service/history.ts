import { Service } from 'egg';

class HistoryService extends Service {
	async create(data: any) {
		const result = await this.ctx.model.History.create(data);
		return result;
	}

	async destroy(ids: Array<string>) {
		const result = await this.ctx.model.History.deleteMany({
			_id: { $in: ids }
		});
		return result;
	}
}

export default HistoryService;
