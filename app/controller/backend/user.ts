import { Controller } from 'egg';

class UserController extends Controller {
	async query() {
		const { ctx, service } = this;
		const { query } = ctx;

		ctx.helper.validate('query', query);

		const result = await service.user.query(query).catch(() => 11000);
		ctx.helper.send(result);
	}

	async info() {
		const { ctx, service } = this;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });

		const result = await service.user.info(id).catch(() => 11001);
		ctx.helper.send(result);
	}

	async create() {
		const { ctx, service } = this;
		const data = ctx.request.body;

		ctx.helper.validate('user', data, true);

		data.password = ctx.helper.MD5(ctx.app.config.salt + data.password);
		const result = await service.user.create(data).catch(err => 11002);
		ctx.helper.send(result);
	}

	async update() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });
		ctx.helper.validate('user', data);

		const result = await service.user.update([ id ], data).catch(() => 11003);
		ctx.helper.send(result);
	}

	async updateMany() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const { ids } = data;

		ctx.helper.validate('ids', { ids });
		ctx.helper.validate('user', data);

		const result = await service.user.update(ids, data).catch(() => 11003);
		ctx.helper.send(result);
	}

	async destroy() {
		const { ctx, service } = this;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });

		const result = await service.user.destroy([ id ]).catch(() => 11004);
		ctx.helper.send(result);
	}

	async destroyMany() {
		const { ctx, service } = this;
		const { ids } = ctx.request.body;

		ctx.helper.validate('ids', { ids });

		const result = await service.user.destroy(ids).catch(() => 11004);
		ctx.helper.send(result);
	}
}

export default UserController;
