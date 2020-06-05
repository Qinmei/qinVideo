import { Controller } from 'egg';

class PostController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        query.status = 'publish';

        const key = ctx.helper.getQueryOrder(query);
        await service.utils.cacheInit(`post${key}`, async () => {
            return await service.post.query(query).catch(() => 14000);
        });
    }

    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;
        const userId = ctx.state.user.id;

        ctx.helper.validate('id', { id });

        let result = await service.utils.cacheGet(`postSlug${id}`);

        if (!result) {
            result = await service.post.slug(id).catch(() => 14001);
            typeof result !== 'number' && service.utils.cacheSet(`postSlug${id}`, result);
        }

        if (typeof result !== 'number' && userId) {
            const isLiked = await service.relation.exist({
                target: result._id,
                author: userId,
            });
            result.isLiked = isLiked;
        }

        service.history.playCreate(result, 'Post');

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
