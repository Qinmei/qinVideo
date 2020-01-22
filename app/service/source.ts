import { Service } from 'egg';

class SourceService extends Service {
    async query({ page, size, sortBy = 'createdAt', sortOrder = -1, title }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.source = { $regex: title, $options: '$i' });

        const result = await this.ctx.model.Source.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit);

        const total = await this.ctx.model.Source.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const result = await this.ctx.app.model.Source.findById(id);
        return result;
    }

    async create(data: any) {
        const result = await this.ctx.model.Source.create(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Source.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Source.deleteMany(query);
        return result;
    }

    async import(source: string, type: string) {
        const info = await this.info(source);

        const hour = type === 'day' ? 24 : type === 'week' ? 168 : null;
        this.ctx.service.sourceInit[info.mode](info, hour);

        return true;
    }
}

export default SourceService;
