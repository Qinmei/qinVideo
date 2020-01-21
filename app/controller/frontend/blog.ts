import { Controller } from 'egg';

class BlogController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        const result = await service.blog.query(query).catch(() => 14000);
        ctx.helper.send(result);
    }

    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.blog.info(id).catch(() => 14001);
        ctx.helper.send(result);
    }

    async create() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const userId = ctx.state.user.id;

        data.author = userId;
        ctx.helper.validate('blog', data, true);

        const result = await service.blog.create(data).catch(() => 14002);
        ctx.helper.send(result);
    }
}

export default BlogController;
