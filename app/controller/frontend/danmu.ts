import { Controller } from 'egg';

class DanmuController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { id } = ctx.query;

        ctx.helper.validate('id', { id });
        const query = {
            page: 1,
            size: 10000,
            player: id,
            sortBy: 'time',
        };

        // await service.utils.cacheInit(`danmu${id}`, async () => {
        //     return await service.danmu.query(query).catch(() => 15000);
        // });

        const result = await service.danmu.query(query).catch(() => 15000);

        ctx.helper.send(result);
    }

    async create() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const userId = ctx.state.user.name;

        data.player = data.id;
        data.author = userId;
        ctx.helper.validate('danmu', data, true);

        const result = await service.danmu.create(data).catch(() => 15002);

        service.data.create('danmu');
        ctx.helper.send(result);
    }
}

export default DanmuController;
