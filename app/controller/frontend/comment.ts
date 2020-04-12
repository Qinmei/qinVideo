import { Controller } from 'egg';

class CommentController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;
        const userId = ctx.state.user.id;

        ctx.helper.validate('query', query);
        ctx.helper.validate('id', { id: query.target });

        query.status = 'publish';

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
        const { page, size } = ctx.query;
        const userId = ctx.state.user.id;

        ctx.helper.validate('id', { id });
        ctx.helper.validate('query', ctx.query);

        let result = await service.comment.single(id, page, size).catch(() => 17001);

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
        ctx.helper.validate('comment', data, true);

        const sensitive = await service.utils.isSensitiveWord(data.content);

        if (sensitive) {
            ctx.helper.error(10019);
        }

        const configInfo = await service.config.cacheInfo();

        data.status = 'publish';
        if (configInfo.commentVerify) {
            data.status = 'draft';
        }

        const result = await service.comment.create(data).catch(() => 17002);

        service.data.create('comment');

        ctx.helper.send(result);
    }
}

export default CommentController;
