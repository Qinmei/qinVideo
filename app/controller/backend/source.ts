import { Controller } from 'egg';

class SourceController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        const result = await service.source.query(query).catch(() => 30000);
        ctx.helper.send(result);
    }

    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.source.info(id).catch(() => 30001);
        ctx.helper.send(result);
    }

    async create() {
        const { ctx, service } = this;
        const data = ctx.request.body;

        ctx.helper.validate('source', data, true);

        const result = await service.source.create(data).catch(() => 30002);
        ctx.helper.send(result);
    }

    async update() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });
        ctx.helper.validate('source', data);

        const result = await service.source.update([id], data).catch(() => 30003);
        ctx.helper.send(result);
    }

    async updateMany() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const { ids } = data;

        ctx.helper.validate('ids', { ids });
        ctx.helper.validate('source', data);

        const result = await service.source.update(ids, data).catch(() => 30003);
        ctx.helper.send(result);
    }

    async destroy() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.source.destroy([id]).catch(() => 30004);
        ctx.helper.send(result);
    }

    async destroyMany() {
        const { ctx, service } = this;
        const { ids } = ctx.request.body;

        ctx.helper.validate('ids', { ids });

        const result = await service.source.destroy(ids).catch(() => 30004);
        ctx.helper.send(result);
    }

    async import() {
        const { ctx, service } = this;
        const { source, type } = ctx.request.body;

        ctx.helper.validate('id', { id: source });
        ctx.helper.validate('id', { id: type });

        const result = await service.source.import(source, type).catch(() => 30005);
        ctx.helper.send(result);
    }
}

export default SourceController;
