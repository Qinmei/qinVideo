import { Controller } from 'egg';

class ConfigController extends Controller {
    async info() {
        const { ctx, service } = this;
        const result = await service.config.simpleInfo().catch(() => 22000);
        ctx.helper.send(result);
    }

    async home() {
        const { service } = this;

        await service.utils.cacheInit(
            'commonHome',
            async () => {
                return await service.config.home('pcIndex').catch(() => 22003);
            },
            3600 * 24
        );
    }

    async mobile() {
        const { service } = this;

        await service.utils.cacheInit(
            'commonMobile',
            async () => {
                return await service.config.home('h5Index').catch(() => 22003);
            },
            3600 * 24
        );
    }
}

export default ConfigController;
