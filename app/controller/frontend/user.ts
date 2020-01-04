import { Controller } from 'egg';

class UserController extends Controller {
    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;
        const userId = ctx.state.user.id;

        ctx.helper.validate('id', { id });

        const result = await service.user[userId === id ? 'info' : 'slug'](id).catch(() => 11001);

        ctx.helper.send(result);
    }

    async relation() {
        const { ctx, service } = this;
        const { type, target } = ctx.request.body;
        const userId = ctx.state.user.id;

        const query = {
            onModel: type,
            target,
            author: userId,
        };

        ctx.helper.validate('relation', query);

        const result = await service.relation.toggle(query).catch(() => 10004);

        ctx.helper.send(result);
    }

    async edit() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const userId = ctx.state.user.id;

        ctx.helper.validate('userEdit', data);

        const result = await service.user.edit(userId, data).catch(() => 11003);

        ctx.helper.send(result);
    }

    async baseInfo() {
        const { ctx, service } = this;
        const { id } = ctx.params;
        ctx.helper.validate('id', { id });

        const result = await service.user.baseInfo(id).catch(() => 11001);

        ctx.helper.send(result);
    }

    async like() {
        const { ctx, service } = this;
        const { query, params } = ctx;
        const { type, id } = params;

        ctx.helper.validate('query', query);
        ctx.helper.validate('id', { id });
        ctx.helper.validate('id', { id: type });

        query.status = 'publish';

        const result = await service.user.typeList(type, query).catch(() => 11005);

        ctx.helper.send(result);
    }

    async own() {
        const { ctx, service } = this;
        const { query, params } = ctx;
        const { type, id } = params;

        ctx.helper.validate('query', query);
        ctx.helper.validate('id', { id });
        ctx.helper.validate('id', { id: type });

        const userId = ctx.state.user.id;

        if (id !== userId) {
            query.status = 'publish';
        }
        query.author = id;

        const result = await service.user.typeList(type, query).catch(() => 11005);

        ctx.helper.send(result);
    }

    async pay() {
        const { ctx, service } = this;
        const { key } = ctx.request.body;
        const userId = ctx.state.user.id;

        ctx.helper.validate('id', { id: key });

        const result = await service.key.use(key, userId).catch(() => 11006);

        ctx.helper.send(result);
    }

    async order() {
        const { ctx, service } = this;
        const { shop } = ctx.request.body;
        const userId = ctx.state.user.id;

        ctx.helper.validate('id', { id: shop });

        const result = await service.order.create({ user: userId, shop }).catch(() => 20001);
        ctx.helper.send(result);
    }
}

export default UserController;
