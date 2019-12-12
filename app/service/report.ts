import { Service } from 'egg';

class ReportService extends Service {
    async query({ page, size, sortBy, sortOrder, title, status }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.content = { $regex: title, $options: '$i' });
        status && (query.status = status);

        const result = await this.ctx.model.Report.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate('author')
            .populate('target');

        const total = await this.ctx.model.Report.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Report.findById(id)
            .populate('author')
            .populate('target');
        return data;
    }

    async create(data: any) {
        const result = await this.ctx.model.Report.create(data);
        return result;
    }

    async update(ids: Array<string>, data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Report.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: Array<string>) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Report.deleteMany(query);
        return result;
    }
}

export default ReportService;
