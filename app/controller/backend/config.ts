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

    async existAdmin() {
        const { ctx, service } = this;

        const result = await service.user.exist({});
        if (result) {
            ctx.helper.send('already');
        }
        ctx.helper.send('init');
    }

    async initAdmin() {
        const { ctx, service } = this;
        const data = ctx.request.body;

        const info = await service.user.exist({});
        if (info) ctx.helper.send(22005);

        data.status = 'publish';
        ctx.helper.validate('user', data, true);

        data.level = 100;
        data.password = ctx.helper.MD5(ctx.app.config.salt + data.password);
        const result = await service.user.create(data).catch(() => 22006);
        ctx.helper.send(result);
    }
}

export default ConfigController;
