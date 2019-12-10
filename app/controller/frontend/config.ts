import { Controller } from 'egg';

interface ConfigInfo {
    pcIndex: any[];
    animeIndex: any[];
    comicIndex: any[];
    h5Index: any[];
}

class ConfigController extends Controller {
    async info() {
        const { ctx, service } = this;
        const result: ConfigInfo | number = await service.config.simpleInfo().catch(() => 15000);
        if (typeof result !== 'number') {
            const arr = ['pcIndex', 'animeIndex', 'comicIndex', 'h5Index'];
            const list = [...result.pcIndex].filter((item: string) => !/new/.test(item));

            const cates = await service.category.list(list);

            arr.map((item: any) => {
                if (!result[item]) result[item] = [];
                result[item] = result[item].map((ele: string) => {
                    const filters = cates.filter((single: any) => single.id === ele);
                    return filters.length > 0 ? filters[0] : ele;
                });
            });
        }
        ctx.helper.send(result);
    }
}

export default ConfigController;
