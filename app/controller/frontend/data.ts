import { Controller } from 'egg';

class DataController extends Controller {
	async query() {
		const { ctx, service } = this;

		const { target, startTime, endTime } = ctx.query;

		ctx.helper.validate('string', { string: target });
		ctx.helper.validate('string', { string: startTime });
		ctx.helper.validate('string', { string: endTime });

		const result = await service.data.query({ target, startTime, endTime }).catch(() => 15000);
		ctx.helper.send(result);
	}

	async create() {
		const { ctx, service } = this;
		const data = ctx.request.body;
		const host = ctx.host;
		const ip = ctx.ip;

		const userId = ctx.state.user.name;

		data.author = userId;
		data.host = host;
		data.ip = ip;
		ctx.helper.validate('data', data, true);

		const result = await service.data.create(data).catch(() => 15002);
		ctx.helper.send(result);
	}
}

export default DataController;
