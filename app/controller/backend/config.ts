import { Controller } from 'egg';

class ConfigController extends Controller {
    async query() {
        const { ctx, service } = this;

        const result = await service.config.info().catch(() => 22000);
        ctx.helper.send(result);
    }

    async create() {
        const { ctx, service } = this;
        const data = ctx.request.body;

        ctx.helper.validate('config', data);

        const result = await service.config.create(data).catch(() => 22001);
        ctx.helper.send(result);
    }
}

export default ConfigController;
