import { Controller } from 'egg';

interface ConfigInfo {
    pcIndex: [string];
    animeIndex: [string];
    comicIndex: [string];
    h5Index: [string];
}

class ConfigController extends Controller {
    async info() {
        const { ctx, service } = this;
        const result: ConfigInfo | number = await service.config.simpleInfo().catch(() => 15000);
        if (result !== 15000) {
            const arr = ['pcIndex', 'animeIndex', 'comicIndex', 'h5Index'];
            const list: [string] = [''];
            arr.map((item: string) => list.push(...result[item]));

            console.log(arr);

            const cates = await service.category.list(list);

            console.log(cates);

            arr.map((item: any) => {
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
