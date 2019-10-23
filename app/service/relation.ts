import { Service } from 'egg';

class RelationService extends Service {
	async toggle(data: any) {
		const info = await this.ctx.model.Relation.findOne(data);

		let result;
		if (info) {
			result = await this.destroy(data);
		} else {
			result = await this.create(data);
		}

		return result;
	}

	async create(data: any) {
		const result = await this.ctx.model.Relation.create(data);
		return result;
	}

	async destroy(data: any) {
		const result = await this.ctx.model.Relation.deleteOne(data);
		return result;
	}
}

export default RelationService;
