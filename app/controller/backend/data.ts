import { Controller } from 'egg';

class DataController extends Controller {
	async query() {
		const { ctx, service } = this;
		const { target, kind, startTime, endTime } = ctx.query;

		ctx.helper.validate('string', { string: target });
		ctx.helper.validate('string', { string: kind });
		ctx.helper.validate('string', { string: startTime });
		ctx.helper.validate('string', { string: endTime });

		const result = await service.data.query({ target, kind, startTime, endTime }).catch(err => 26000);
		ctx.helper.send(result);
	}
}

export default DataController;
