import { Controller } from 'egg';

class EposideController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { target } = ctx.query;

        ctx.helper.validate('id', { id: target });

        const result = await service.eposide.query({ target }).catch(() => 18000);
        ctx.helper.send(result);
    }

    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.eposide.info(id).catch(() => 18001);
        ctx.helper.send(result);
    }

    async create() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const userId = ctx.state.user.id;

        data.author = userId;
        ctx.helper.validate('eposide', data, true);

        const result = await service.eposide.create(data).catch(() => 18002);

        const { target, onModel } = data;
        const type = onModel.toLowerCase();

        service[type].update([target], { updateTime: new Date().getTime() });

        ctx.helper.send(result);
    }

    async update() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });
        ctx.helper.validate('eposide', data);

        const result = await service.eposide.update([id], data).catch(() => 18003);
        ctx.helper.send(result);
    }

    async updateMany() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const { ids } = data;

        ctx.helper.validate('ids', { ids });
        ctx.helper.validate('eposide', data);

        const result = await service.eposide.update(ids, data).catch(() => 18003);
        ctx.helper.send(result);
    }

    async destroy() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.eposide.destroy([id]).catch(() => 18004);
        ctx.helper.send(result);
    }

    async destroyMany() {
        const { ctx, service } = this;
        const { ids } = ctx.request.body;

        ctx.helper.validate('ids', { ids });

        const result = await service.eposide.destroy(ids).catch(() => 18004);
        ctx.helper.send(result);
    }
}

export default EposideController;
