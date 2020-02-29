import { Service } from 'egg';

interface Query {
    page: number;
    size: number;
    sortBy: string;
    sortOrder?: number;
    title?: string;
    target?: string;
}

class DanmuService extends Service {
    async query({ page, size, sortBy = 'createdAt', sortOrder = -1, title, target }: Query) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.text = { $regex: title, $options: '$i' });
        target && (query.target = target);

        const result = await this.ctx.model.Danmu.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate({
                path: 'target',
                populate: [
                    {
                        path: 'target',
                        select: 'title slug',
                    },
                ],
                select: 'title target onModel',
            });

        const total = await this.ctx.model.Danmu.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Danmu.findById(id).populate('target');
        return data;
    }

    async create(data: any) {
        const result = await this.ctx.model.Danmu.create(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Danmu.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Danmu.deleteMany(query);
        return result;
    }
}

export default DanmuService;
