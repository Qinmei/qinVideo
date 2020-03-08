import { Controller } from 'egg';

class PostController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        query.status = 'publish';

        if (query.title) service.data.create('search', query.title);

        const key = JSON.stringify(query);
        await service.utils.cacheInit(`post${key}`, async () => {
            return await service.post.query(query).catch(() => 14000);
        });
    }

    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;
        const userId = ctx.state.user.id;

        ctx.helper.validate('id', { id });

        const result = await service.post.slug(id).catch(() => 14001);
        if (typeof result !== 'number' && userId) {
            const isLiked = await service.relation.exist({
                target: result._id,
                author: userId,
            });
            result.isLiked = isLiked;
            service.history.create(result._id, 'Post');
        }

        ctx.helper.send(result);
    }

    async relative() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        await service.utils.cacheInit(`postRelative${id}`, async () => {
            return await service.post.relative(id).catch(() => 18001);
        });
    }
}

export default PostController;
