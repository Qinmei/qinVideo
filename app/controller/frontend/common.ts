import { Controller } from 'egg';

class CommonController extends Controller {
    async upload() {
        const { ctx, service } = this;
        const files = ctx.request.files;
        const { type } = ctx.request.body;

        ctx.helper.validate('string', { string: type });

        const result = await service.upload.uploadImg(files, type).catch(() => 25000);
        ctx.helper.send(result);
    }

    async report() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const userId = ctx.state.user.id;

        data.author = userId;
        data.status = 'draft';
        ctx.helper.validate('report', data, true);

        const { author, target } = data;

        const exist = await service.report.exist({ author, target });
        if (exist) ctx.helper.error(23005);

        const result = await service.report.create(data).catch(() => 23002);

        ctx.helper.send(result);
    }

    async category() {
        const { ctx, service } = this;
        const type = ctx.params.type;

        ctx.helper.validate('string', { string: type });

        const result = await service.category.queryByType(type).catch(() => 16000);
        ctx.helper.send(result);
    }

    async cateInfo() {
        const { ctx, service } = this;
        const id = ctx.params.id;

        ctx.helper.validate('id', { id });

        const result = await service.category.info(id).catch(() => 16001);
        ctx.helper.send(result);
    }

    async shop() {
        const { ctx, service } = this;
        const { query } = ctx;

        ctx.helper.validate('query', query);

        query.status = 'publish';

        const result = await service.shop.query(query).catch(() => 21000);
        ctx.helper.send(result);
    }

    async rate() {
        const { ctx, service } = this;
        const data = ctx.request.body;
        const userId = ctx.state.user.id;

        data.author = userId;
        ctx.helper.validate('rate', data, true);

        const info = await service.rate.exist(userId, data.target);
        if (info) ctx.helper.send(29005);
        const result = await service.rate.create(data).catch(() => 29002);

        service.count.init(result, 'rateCount');
        service.count.init(result, 'rateStar');

        ctx.helper.send(result);
    }

    async test() {
        // this.ctx.service.count.syncEposide();
        // this.ctx.service.count.syncAnimate();
        // this.ctx.service.count.syncComic();
        // this.ctx.service.count.syncPost();
        this.ctx.helper.send('start');
    }
}

export default CommonController;
