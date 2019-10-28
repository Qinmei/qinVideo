import { Controller } from 'egg';

class PostController extends Controller {
	async query() {
		const { ctx, service } = this;
		const { query } = ctx;

		ctx.helper.validate('query', query);

		const result = await service.post.query(query).catch(() => 14000);
		ctx.helper.send(result);
	}

	async info() {
		const { ctx, service } = this;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });

		const result = await service.post.info(id).catch(() => 14001);
		ctx.helper.send(result);
	}

	async create() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const userId = ctx.state.user.id;

		data.author = userId;
		ctx.helper.validate('post', data, true);

		const result = await service.post.create(data).catch(() => 14002);
		ctx.helper.send(result);
	}

	async update() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });
		ctx.helper.validate('post', data);

		const result = await service.post.update([id], data).catch(() => 14003);
		ctx.helper.send(result);
	}

	async updateMany() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const { ids } = data;

		ctx.helper.validate('ids', { ids });
		ctx.helper.validate('post', data);

		const result = await service.post.update(ids, data).catch(() => 14003);
		ctx.helper.send(result);
	}

	async destroy() {
		const { ctx, service } = this;
		const id = ctx.params.id;

		ctx.helper.validate('id', { id });

		const result = await service.post.destroy([id]).catch(() => 14004);
		ctx.helper.send(result);
	}

	async destroyMany() {
		const { ctx, service } = this;
		const { ids } = ctx.request.body;

		ctx.helper.validate('ids', { ids });

		const result = await service.post.destroy(ids).catch(() => 14004);
		ctx.helper.send(result);
	}
}

export default PostController;
