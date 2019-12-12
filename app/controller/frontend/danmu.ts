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

        const result = await service.danmu.query(query).catch(() => 15000);
        ctx.helper.send(result);
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

        const result = await service.danmu.query(query).catch(() => 15000);
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
