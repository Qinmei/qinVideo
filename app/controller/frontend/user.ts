import { Controller } from 'egg';

class UserController extends Controller {
    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.user.slug(id).catch(() => 11001);

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
}

export default UserController;
