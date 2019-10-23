import { Service } from 'egg';

class OrderService extends Service {
	async create(data: any) {
		const result = await this.ctx.model.Order.create(data);
		return result;
	}
}

export default OrderService;
