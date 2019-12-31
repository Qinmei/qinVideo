import { Controller } from 'egg';

class DanmuController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { id } = ctx.query;

        ctx.helper.validate('string', { string: id });
        const query = {
            page: 1,
            size: 10000,
            player: id,
            sortBy: 'time',
        };

        await service.utils.cacheInit(`danmu${id}`, async () => {
            return await service.danmu.query(query).catch(() => 15000);
        });
    }

    async queryV3() {
        const { ctx, service } = this;
        const { id } = ctx.query;

        ctx.helper.validate('string', { string: id });
        const query = {
            page: 1,
            size: 10000,
            player: id,
            sortBy: 'time',
        };

        let result;
        const cache = await service.utils.cacheGet(`danmu${id}`);
        if (cache) {
            result = cache;
        } else {
            const result = await service.danmu.query(query).catch(() => 15000);
            if (typeof result !== 'number') {
                await service.utils.cacheSet(`danmu${id}`, result);
            }
        }

        let danmu = typeof result === 'number' ? [] : result.list;
        danmu = danmu.map((item: any) => [
            item.time || 0,
            item.type || 0,
            item.color || 16777215,
            this.ctx.helper.htmlEncode(item.text) || '',
        ]);
        this.ctx.body = {
            code: 0,
            data: danmu,
        };
    }

    async create() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const userId = ctx.state.user.name;

        data.player = data.id;
        data.author = userId;
        ctx.helper.validate('danmu', data, true);

        const result = await service.danmu.create(data).catch(() => 15002);
        this.ctx.body = {
            code: typeof result === 'number' ? result : 0,
        };
    }
}

export default DanmuController;
