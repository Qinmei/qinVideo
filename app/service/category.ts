import { Service } from 'egg';

class CategoryService extends Service {
    async query({ page, size, sortBy = 'createdAt', sortOrder = -1, type, title }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;
        const query: any = {};
        type && (query.type = type);
        title && (query.name = { $regex: title, $options: '$i' });

        const result = await this.ctx.model.Category.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit);

        const total = await this.ctx.model.Category.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Category.findById(id);
        return data;
    }

    async create(data: any) {
        const result = await this.ctx.model.Category.create(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : { type: data.type };
        const result = await this.ctx.model.Category.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[], type?: string) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : { type };
        const result = await this.ctx.model.Category.deleteMany(query);
        return result;
    }

    async list(list: string[]) {
        const data = await this.ctx.model.Category.find({ _id: { $in: list } });
        return data;
    }

    async queryByType(type: string) {
        let list: string[] = [];
        switch (type) {
            case 'animate':
                list = ['akind', 'ayear', 'atag', 'aarea'];
                break;
            case 'comic':
                list = ['ckind', 'cyear', 'ctag', 'carea'];
                break;
            case 'post':
                list = ['pkind', 'ptag'];
                break;
            default:
                list = [type];
                break;
        }

        const data = await this.ctx.model.Category.find({ type: { $in: list }, show: true });
        return data;
    }
}

export default CategoryService;
