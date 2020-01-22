import { Service } from 'egg';

class ShopService extends Service {
    async query({ page, size, sortBy = 'createdAt', sortOrder = -1, title, status }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.title = { $regex: title, $options: '$i' });
        status && (query.status = status);

        const result = await this.ctx.model.Shop.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit);

        const total = await this.ctx.model.Shop.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Shop.findById(id);
        return data;
    }

    async create(data: any) {
        const result = await this.ctx.model.Shop.create(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Shop.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Shop.deleteMany(query);
        return result;
    }
}

export default ShopService;
