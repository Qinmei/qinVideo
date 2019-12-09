import { Service } from 'egg';
import * as short from 'short-uuid';

class KeyService extends Service {
	async query({ page, size, sortBy, sortOrder, title, status }) {
		const skip: number = (page - 1) * size;
		const limit: number = size;

		const query: any = {};
		title && (query.key = { $regex: title, $options: '$i' });
		status && (query.status = status);

		const result = await this.ctx.model.Key.find(query)
			.sort({ [sortBy]: sortOrder, _id: -1 })
			.skip(skip)
			.limit(limit);

		const total = await this.ctx.model.Key.find(query).countDocuments();

		return {
			list: result,
			total,
		};
	}

	async info(id: string) {
		const data = this.ctx.model.Key.findById(id);
		return data;
	}

	async create(data: any) {
		const { count, price, expired } = data;
		const newData: Array<{}> = [];
		for (let i = 0; i < count; i++) {
			const item = {
				key: short.generate(),
				price,
				expired,
				status: 'draft',
			};
			newData.push(item);
		}
		const result = await this.ctx.model.Key.create(newData);
		return result;
	}

	async update(ids: string[], data: any) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Key.updateMany(query, { $set: data });
		return result;
	}

	async destroy(ids: string[]) {
		const query = ids.length > 0 ? { _id: { $in: ids } } : {};
		const result = await this.ctx.model.Key.deleteMany(query);
		return result;
	}
}

export default KeyService;
