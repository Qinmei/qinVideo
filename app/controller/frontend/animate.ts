import { Controller } from 'egg';

class AnimateController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        const result = await service.animate.query(query).catch(() => 12000);
        ctx.helper.send(result);
    }

    async info() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.animate.info(id).catch(() => 12001);
        ctx.helper.send(result);
    }
}

export default AnimateController;
