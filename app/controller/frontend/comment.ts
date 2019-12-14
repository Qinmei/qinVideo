import { Controller } from 'egg';

class CommentController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        const result = await service.comment.query(query).catch(() => 17000);
        ctx.helper.send(result);
    }

    async info() {
        const { ctx, service } = this;
        const target = ctx.params.id;
        const query = ctx.query;

        query.target = target;

        ctx.helper.validate('query', query);

        const result = await service.comment.info(query).catch(() => 17001);
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
