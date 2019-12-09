import { Controller } from 'egg';

class CloudController extends Controller {
	async query() {
		const { ctx, service } = this;
		const { query } = ctx;

		ctx.helper.validate('query', query);

		const result = await service.cloud.query(query).catch(() => 28000);
		ctx.helper.send(result);
	}

	async info() {
		const { ctx, service } = this;

		const result = await service.cloud.settingInfo().catch(() => 28001);
		ctx.helper.send(result);
	}

	async update() {
		const { ctx, service } = this;
		const data = ctx.request.body;

		const result = await service.cloud.settingCreate(data).catch(() => 28002);
		ctx.helper.send(result);
	}

	async save() {
		const { ctx, service } = this;
		const { ids } = ctx.request.body;

		ctx.helper.validate('ids', { ids });

		const result = await service.cloud.save(ids).catch(err => console.log(err));
		ctx.helper.send(result);
	}

	async import() {
		const { ctx, service } = this;
		const { source, hour } = ctx.request.body;

		ctx.helper.validate('string', { string: source });

		const result = await service.cloud.import(source, hour).catch(() => 28004);
		ctx.helper.send(result);
	}
}

export default CloudController;
