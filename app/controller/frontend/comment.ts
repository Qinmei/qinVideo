import { Controller } from 'egg';

class CommentController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;
        const userId = ctx.state.user.id;

        ctx.helper.validate('query', query);

        const result = await service.comment.list(query).catch(() => 17000);
        if (userId && typeof result !== 'number') {
            const newList = await service.comment.addLike(result.list, userId);
            result.list = newList;
        }

        ctx.helper.send(result);
    }

    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;
        const userId = ctx.state.user.id;

        ctx.helper.validate('id', { id });

        let result = await service.comment.info(id).catch(() => 17001);

        if (userId && typeof result !== 'number') {
            const newList = await service.comment.addLike([result], userId);
            result = newList[0];
        }

        ctx.helper.send(result);
    }

    async create() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const userId = ctx.state.user.id;

        data.author = userId;
        data.status = 'draft';
        ctx.helper.validate('comment', data, true);

        const result = await service.comment.create(data).catch(() => 17002);
        ctx.helper.send(result);
    }

    async destroy() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.comment.destroy([id]).catch(() => 17004);
        ctx.helper.send(result);
    }
}

export default CommentController;
