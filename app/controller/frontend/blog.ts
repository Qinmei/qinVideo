import { Controller } from 'egg';

class BlogController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;
        const userId = ctx.state.user.id;

        ctx.helper.validate('query', query);

        const result = await service.blog.query(query).catch(() => 32000);

        if (userId && typeof result !== 'number') {
            const newList = await service.blog.addLike(result.list, userId);
            result.list = newList;
        }
        ctx.helper.send(result);
    }

    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;
        const userId = ctx.state.user.id;

        ctx.helper.validate('id', { id });

        let result = await service.blog.info(id).catch(() => 32001);

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
        data.status = 'publish';
        data.hot = 0;
        ctx.helper.validate('blog', data, true);

        const sensitive = await service.utils.isSensitiveWord(data.content);

        if (sensitive) {
            ctx.helper.error(10019);
        }

        const result = await service.blog.create(data).catch(() => 32002);
        service.data.create('blog');
        ctx.helper.send(result);
    }
}

export default BlogController;
