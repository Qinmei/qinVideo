import { Controller } from 'egg';
import * as moment from 'moment';

class DataController extends Controller {
    async query() {
        const { ctx, service } = this;

        const target = 'search';
        const startTime = moment()
            .add(-7, 'days')
            .format('YYYY-MM-DD');
        const endTime = moment().format('YYYY-MM-DD');

        const result = await service.data.query({ target, startTime, endTime }).catch(() => 15000);
        ctx.helper.send(result);
    }

    async create() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const host = ctx.host;
        const ip = ctx.ip;

        const userId = ctx.state.user.name;

        data.author = userId;
        data.host = host;
        data.ip = ip;
        ctx.helper.validate('data', data, true);

        const result = await service.data.create(data).catch(() => 15002);
        ctx.helper.send(result);
    }
}

export default DataController;
