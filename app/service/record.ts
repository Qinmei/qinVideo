import { Service } from 'egg';

class RecordService extends Service {
    async query({ page, size, sortBy, sortOrder, type, title }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query._id = { $in: [title] });
        type && (query.type = type);

        const result = await this.ctx.model.Record.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate('source')
            .populate({ path: 'author', select: 'name' });

        const total = await this.ctx.model.Record.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async create(data: any) {
        const result = await this.ctx.model.Record.create(data);
        return result.toJSON();
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Record.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Record.deleteMany(query);
        return result;
    }

    async simpleCreate(id, type, kind, total = 0) {
        const { state } = this.ctx;
        const author = state.user.id;

        const result = await this.create({
            source: id,
            type,
            author,
            kind,
            total,
        });

        return result;
    }

    async simpleUpdate(data) {
        const { total, success, fail, content, _id } = data;
        await this.update([_id], { total, success, fail, content });
    }
}

export default RecordService;
