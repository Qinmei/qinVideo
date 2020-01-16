import { Controller } from 'egg';

class RecordController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        const result = await service.record.query(query).catch(() => 31000);
        ctx.helper.send(result);
    }

    async destroy() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.record.destroy([id]).catch(() => 31004);
        ctx.helper.send(result);
    }

    async destroyMany() {
        const { ctx, service } = this;
        const { ids } = ctx.request.body;

        ctx.helper.validate('ids', { ids });

        const result = await service.record.destroy(ids).catch(() => 31004);
        ctx.helper.send(result);
    }
}

export default RecordController;
