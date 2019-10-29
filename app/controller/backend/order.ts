import { Controller } from 'egg';

class OrderController extends Controller {
	async query() {
		const { ctx, service } = this;
		const { query } = ctx;

		ctx.helper.validate('query', query);

		const result = await service.order.query(query).catch(() => 20000);
		ctx.helper.send(result);
	}

	async create() {
		const { ctx, service } = this;
		const { user, shop } = ctx.request.body;

		ctx.helper.validate('id', { id: user });
		ctx.helper.validate('id', { id: shop });

		const result = await service.order.create({ user, shop }).catch(() => 20001);
		ctx.helper.send(result);
	}

	async info() {
		const { ctx, service } = this;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });

		const result = await service.order.info(id).catch(() => 20001);
		ctx.helper.send(result);
	}

	async destroy() {
		const { ctx, service } = this;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });

		const result = await service.order.destroy([id]).catch(() => 20004);
		ctx.helper.send(result);
	}

	async destroyMany() {
		const { ctx, service } = this;
		const { ids } = ctx.request.body;

		ctx.helper.validate('ids', { ids });

		const result = await service.order.destroy(ids).catch(() => 20004);
		ctx.helper.send(result);
	}
}

export default OrderController;
