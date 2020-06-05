import { Controller } from 'egg';

class DanmuController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { id } = ctx.query;

        ctx.helper.validate('id', { id });
        const query = {
            page: 1,
            size: 10000,
            target: id,
            sortBy: 'time',
            status: 'publish',
        };

        await service.utils.cacheInit(`danmu${id}`, async () => {
            return await service.danmu.query(query).catch(() => 15000);
        });
    }

    async create() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const userId = ctx.state.user.id;
        const level = ctx.state.user.level;

        data.target = data.id;
        data.author = userId;
        ctx.helper.validate('danmu', data, true);

        const sensitive = await service.utils.isSensitiveWord(data.text);

        if (sensitive) {
            ctx.helper.error(10019);
        }

        const configInfo = await service.config.cacheInfo();

        if (configInfo.danmuAuth && level === 0) {
            ctx.helper.send(10014);
        }

        data.status = 'publish';
        if (configInfo.danmuVerify) {
            data.status = 'draft';
        }

        const result = await service.danmu.create(data).catch(() => 15002);

        service.count.init(result, 'danmu');

        ctx.helper.send(result);
    }
}

export default DanmuController;
