import { Service } from 'egg';

class ToolService extends Service {
    async replace({ type, kind, before, after }) {
        const { model, helper } = this.ctx;
        const Model = type === 'link' ? model.Eposide : model[kind];
        const data =
            type === 'link'
                ? await Model.find({ onModel: kind, 'link.value': { $regex: before, $options: 'i' } })
                : await Model.find({ [type]: { $regex: before, $options: 'i' } });

        const result = {
            total: data.length,
            success: 0,
            fail: 0,
        };

        for (let index = 0; index < data.length; index++) {
            const doc = JSON.parse(JSON.stringify(data[index]));

            let newTarget;
            if (type !== 'link') {
                const target = doc[type];
                newTarget = target.replace(before, after);
            } else {
                const target = doc.link;
                newTarget = target.map((item: any) => {
                    const value = item.value;
                    const newValue = value.replace(before, after);
                    return {
                        ...item,
                        value: newValue,
                    };
                });
            }
            const info = await Model.updateOne(
                { _id: doc._id },
                {
                    $set: {
                        [type]: newTarget,
                    },
                }
            ).catch(() => false);
            result[info ? 'success' : 'fail'] += 1;

            await helper.sleep(1000);
        }

        return result;
    }

    async downloadImg({ type, kind, replace }) {
        const { model, helper, service } = this.ctx;
        const Model = type === 'cover' ? model.Eposode : model[kind];
        const data =
            type === 'cover'
                ? await Model.find({ onModel: kind, [type]: { $regex: /^http/i } }).populate('target')
                : await Model.find({ [type]: { $regex: /^http/i } });

        const result = {
            total: data.length,
            success: 0,
            fail: 0,
        };

        for (let index = 0; index < data.length; index++) {
            const doc = data[index];
            const target = doc[type];

            const rename = type === 'cover' ? doc.target.title + '-' + doc.title : doc.slug + '-' + type;

            const newTarget = await service.utils.download(target, rename).catch(() => false);

            if (newTarget && replace) {
                Model.updateOne(
                    { _id: doc._id },
                    {
                        $set: {
                            [type]: newTarget,
                        },
                    }
                );
            }

            result[newTarget ? 'suceess' : 'fail'] += 1;

            await helper.sleep(1000);
        }

        return result;
    }

    async upload(files: Array<any>, type: string) {
        const { helper, service } = this.ctx;
        const TypeKind = service[type];

        const data = helper.readJSON(files[0].filepath);

        const result = {
            total: data.length,
            success: 0,
            fail: 0,
        };

        for (let index = 0; index < data.length; index++) {
            const doc = data[index];

            const handler = await TypeKind.import(doc).catch(() => false);

            result[handler ? 'success' : 'fail'] += 1;

            await helper.sleep(1000);
        }

        return result;
    }
}

export default ToolService;
