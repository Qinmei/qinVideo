import { Service } from 'egg';

class DataService extends Service {
	async create(data: any) {
		const result = await this.ctx.model.Data.create(data);
		return result;
	}

	async destroy(start: string, end: string) {
		const result = await this.ctx.model.Data.deleteMany({ $gte: start, $lte: end });
		return result;
	}
}

export default DataService;
