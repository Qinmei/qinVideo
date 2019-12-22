import { Controller } from 'egg';

class PostController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        query.status = 'publish';

        const result = await service.post.query(query).catch(() => 14000);
        ctx.helper.send(result);
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
        }
        if (Array.isArray(result.eposides)) {
            result.eposides.sort((a: any, b: any) => a.sort - b.sort);
        }
        ctx.helper.send(result);
    }

    async relative() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.post.relative(id).catch(() => 18001);
        ctx.helper.send(result);
    }
}

export default PostController;
