import { Controller } from 'egg';

class ConfigController extends Controller {
	async info() {
		const { ctx, service } = this;
		const result = await service.config.simpleInfo().catch(() => 15000);
		ctx.helper.send(result);
	}
}

export default ConfigController;
