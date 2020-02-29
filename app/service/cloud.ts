import { Service } from 'egg';

class CloudService extends Service {
    async query({ page, size, sortBy = 'createdAt', sortOrder = -1, title, source, type }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.title = { $regex: title, $options: '$i' });
        source && (query.source = source);
        type && (query.type = type);

        let result = await this.ctx.model.Cloud.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit);

        result = JSON.parse(JSON.stringify(result));

        for (const ele of result) {
            const isExist = await this.existLocal(ele.slug, ele.type);
            ele.exist = !!isExist;
        }

        const total = await this.ctx.model.Cloud.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const result = await this.ctx.app.model.Cloud.findById(id);
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Cloud.deleteMany(query);
        return result;
    }

    async existLocal(slug: string, type: string) {
        const result = await this.ctx.model[type].findOne({ slug });
        return result;
    }

    async saveToLocal(data: any) {
        const result = await this.ctx.model[data.type].create(data);
        const { eposide = [] } = data;

        eposide.map((item, index) => {
            item.target = result._id;
            item.onModel = data.type;
            item.sort = index + 1;
        });

        const eposideData = await this.ctx.service.eposide.create(eposide).catch(() => false);
        if (!eposideData) {
            await this.ctx.service[data.type.toLowerCase()].destroy([result._id]);
        }

        return eposideData;
    }

    async updateToLocal(data: any) {
        const result = await this.existLocal(data.slug, data.type);
        const { eposide = [] } = data;

        const existEposide = await this.ctx.service.eposide.query({ target: result._id });

        if (existEposide.total < eposide.length) {
            for (let index = 0; index <= eposide.length; index++) {
                const item = eposide[index];
                if (!existEposide.list.some((ele: any) => ele._id.toString() === item._id)) {
                    item.target = result._id;
                    item.onModel = data.type;
                    item.sort = index + 1;
                    await this.ctx.service.eposide.create(item);
                }
            }
            await this.ctx.model[data.type].updateOne(
                { slug: data.slug },
                { $set: { updateTime: new Date().getTime() } }
            );
        }

        return result;
    }

    async list(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Cloud.find(query);
        return result;
    }

    async save(ids: string[]) {
        const data = await this.list(ids);
        const newData = JSON.parse(JSON.stringify(data));

        let result = {
            total: newData.length,
            success: 0,
            fail: 0,
            content: [''],
        };

        if (ids.length === 0) {
            result = await this.ctx.service.record.simpleCreate(null, 'save', 'All', newData.length);
        }

        for (const ele of newData) {
            ele.area = [];
            ele.year = [];
            ele.kind = [];
            ele.tag = [];

            const exist = await this.existLocal(ele.slug, ele.type);

            try {
                if (!exist) {
                    await this.saveToLocal(ele);
                } else {
                    await this.updateToLocal(ele);
                }
                result.success++;
            } catch (error) {
                result.fail++;
                result.content.push(ele.slug);
            }

            await this.ctx.helper.sleep(1000);
        }

        if (ids.length === 0) {
            await this.ctx.service.record.simpleUpdate(result);
        }

        return result;
    }

    async autoUpdate() {
        const data = await this.ctx.model.Animate.find({ isUpdate: true });
        const dataArr = JSON.parse(JSON.stringify(data));
        const targetArr = dataArr.map((item) => item.slug);

        const handler = await this.ctx.model.Cloud.find({ slug: { $in: targetArr } });
        const handlerArr = JSON.parse(JSON.stringify(handler));
        const ids = handlerArr.map((item) => item._id);
        await this.save(ids);
    }
}

export default CloudService;
