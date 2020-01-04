import { Controller } from 'egg';

class DataController extends Controller {
    async query() {
        const { ctx, service } = this;
        const { target, startTime, endTime } = ctx.query;

        ctx.helper.validate('string', { string: target });
        ctx.helper.validate('id', { id: startTime });
        ctx.helper.validate('id', { id: endTime });

        const result = await service.data.query({ target, startTime, endTime }).catch(() => 26000);
        ctx.helper.send(result);
    }

    async todayData() {
        const { ctx, service } = this;

        const result = await service.data.todayData().catch(() => 26000);
        ctx.helper.send(result);
    }

    async search() {
        const { ctx, service } = this;
        const { startTime, endTime } = ctx.query;

        ctx.helper.validate('id', { id: startTime });
        ctx.helper.validate('id', { id: endTime });

        const result = await service.data.search({ startTime, endTime }).catch(() => 26000);
        ctx.helper.send(result);
    }

    async activeSort() {
        const { ctx, service } = this;
        const { type, startTime, endTime } = ctx.query;

        ctx.helper.validate('id', { id: type });
        ctx.helper.validate('id', { id: startTime });
        ctx.helper.validate('id', { id: endTime });

        const result = await service.data.activeSort({ type, startTime, endTime }).catch(() => 26000);
        ctx.helper.send(result);
    }

    async workData() {
        const { ctx, service } = this;

        const result = await service.data.workData().catch(() => 26000);
        ctx.helper.send(result);
    }
}

export default DataController;
