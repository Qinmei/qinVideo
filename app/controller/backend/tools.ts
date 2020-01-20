import { Controller } from 'egg';

class ConfigController extends Controller {
    async replace() {
        const { ctx, service } = this;
        const data = ctx.request.body;

        ctx.helper.validate('replace', data);

        const result = await service.tools.replace(data).catch(() => 27001);
        ctx.helper.send(result);
    }

    async downImg() {
        const { ctx, service } = this;
        const data = ctx.request.body;

        ctx.helper.validate('downimg', data);

        const result = await service.tools.downloadImg(data).catch(() => 27003);
        ctx.helper.send(result);
    }

    async upload() {
        const { ctx, service } = this;
        const files = ctx.request.files;
        const { type } = ctx.request.body;

        ctx.helper.validate('string', { string: type });

        const result = await service.tools.upload(files, type).catch(() => 27004);
        ctx.helper.send(result);
    }
}

export default ConfigController;
