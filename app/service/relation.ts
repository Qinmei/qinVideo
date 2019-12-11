import { Service } from 'egg';

class RelationService extends Service {
    async query({ page, size, sortBy, sortOrder, onModel }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        onModel && (query.onModel = onModel);

        const result = await this.ctx.model.Relation.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate({ path: 'author', select: 'name avatar level introduce background' })
            .populate('target');

        const total = await this.ctx.model.Relation.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async exist(data: any) {
        const result = await this.ctx.model.Relation.findOne(data);
        return !!result;
    }

    async toggle(data: any) {
        const info = await this.ctx.model.Relation.findOne(data);

        let result;
        if (info) {
            result = await this.destroy(data);
        } else {
            result = await this.create(data);
        }

        return result;
    }

    async create(data: any) {
        const result = await this.ctx.model.Relation.create(data);
        return result;
    }

    async destroy(data: any) {
        const result = await this.ctx.model.Relation.deleteOne(data);
        return result;
    }
}

export default RelationService;
