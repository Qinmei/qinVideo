import { Controller } from 'egg';

class DataController extends Controller {
	async query() {
		const { ctx, service } = this;
		const { query } = ctx;

		ctx.helper.validate('query', query);

		const result = await service.data.query(query).catch(() => 15000);
		ctx.helper.send(result);
	}

	async create() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const userId = ctx.state.user.name;

		data.author = userId;
		ctx.helper.validate('data', data, true);

		const result = await service.data.create(data).catch(() => 15002);
		ctx.helper.send(result);
	}
}

export default DataController;
