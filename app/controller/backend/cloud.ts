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
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.cloud.info(id).catch(() => 28001);
        ctx.helper.send(result);
    }

    async save() {
        const { ctx, service } = this;
        const { ids } = ctx.request.body;

        ctx.helper.validate('ids', { ids });

        if (ids.length > 0) {
            const result = await service.cloud.save(ids).catch(() => 28003);
            ctx.helper.send(result);
        } else {
            service.cloud.save(ids).catch(() => 28003);
            ctx.helper.success('mission start');
        }
    }

    async destroy() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.cloud.destroy([id]).catch(() => 28004);
        ctx.helper.send(result);
    }

    async destroyMany() {
        const { ctx, service } = this;
        const { ids } = ctx.request.body;

        ctx.helper.validate('ids', { ids });

        const result = await service.cloud.destroy(ids).catch(() => 28004);
        ctx.helper.send(result);
    }
}

export default CloudController;
