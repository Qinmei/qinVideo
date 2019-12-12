import { Controller } from 'egg';

class UploadsController extends Controller {
    async uploadImg() {
        const { ctx, service } = this;
        const files = ctx.request.files;
        const { type } = ctx.request.body;

        ctx.helper.validate('string', { string: type });

        const result = await service.upload.uploadImg(files, type).catch(() => 25000);
        ctx.helper.send(result);
    }

    async queryImg() {
        const { ctx, service } = this;
        const { type } = ctx.params;
        const query = ctx.query;

        ctx.helper.validate('string', { string: type });
        ctx.helper.validate('query', query);

        const result = await service.upload.queryImg(type, query).catch(() => 25001);
        ctx.helper.send(result);
    }

    async deleteImg() {
        const { ctx, service } = this;
        const { ids } = ctx.request.body;

        ctx.helper.validate('ids', { ids });

        const result = await service.upload.deleteImg(ids).catch(() => 25002);
        ctx.helper.send(result);
    }
}

export default UploadsController;
