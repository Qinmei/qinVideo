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
        ctx.helper.validate('report', data, true);

        const result = await service.report.create(data).catch(() => 23002);
        ctx.helper.send(result);
    }
}

export default CommonController;
