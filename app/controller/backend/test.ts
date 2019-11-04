import { Controller } from 'egg';

class UserController extends Controller {
	async test() {
		const { ctx, service } = this;
		const { query } = ctx;

		const result = await service.maccms.list(query).catch(() => 11000);
		ctx.helper.send(result);
	}
}

export default UserController;
