import { Controller } from 'egg';

class ComicController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        const result = await service.comic.query(query).catch(() => 13000);
        ctx.helper.send(result);
    }

    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.comic.info(id).catch(() => 13001);
        ctx.helper.send(result);
    }
}

export default ComicController;
