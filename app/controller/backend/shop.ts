import { Controller } from 'egg';

class ShopController extends Controller {
	async query() {
		const { ctx, service } = this;
		const { query } = ctx;

		ctx.helper.validate('query', query);

		const result = await service.shop.query(query).catch(() => 21000);
		ctx.helper.send(result);
	}

	async info() {
		const { ctx, service } = this;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });

		const result = await service.shop.info(id).catch(() => 21001);
		ctx.helper.send(result);
	}

	async create() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const userId = ctx.state.user._id;

		data.author = userId;
		ctx.helper.validate('shop', data, true);

		const result = await service.shop.create(data).catch(() => 21002);
		ctx.helper.send(result);
	}

	async update() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });
		ctx.helper.validate('shop', data);

		const result = await service.shop.update([id], data).catch(() => 21003);
		ctx.helper.send(result);
	}

	async updateMany() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const { ids } = data;

		ctx.helper.validate('ids', { ids });
		ctx.helper.validate('shop', data);

		const result = await service.shop.update(ids, data).catch(() => 21003);
		ctx.helper.send(result);
	}

	async destroy() {
		const { ctx, service } = this;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });

		const result = await service.shop.destroy([id]).catch(() => 21004);
		ctx.helper.send(result);
	}

	async destroyMany() {
		const { ctx, service } = this;
		const { ids } = ctx.request.body;

		ctx.helper.validate('ids', { ids });

		const result = await service.shop.destroy(ids).catch(() => 21004);
		ctx.helper.send(result);
	}
}

export default ShopController;
