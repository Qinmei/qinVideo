import { Service } from 'egg';

class SeasonService extends Service {
    async query({ page, size, sortBy, sortOrder, type, title }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;
        const query: any = {};
        type && (query.type = type);
        title && (query.name = { $regex: title, $options: '$i' });

        const result = await this.ctx.model.Season.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate({ path: `${type}Count` });

        const total = await this.ctx.model.Season.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Season.findById(id)
            .populate({ path: 'animate', select: 'title season' })
            .populate({ path: 'comic', select: 'title season' })
            .populate({ path: 'post', select: 'title season' });
        return data;
    }

    async create(data: any) {
        const result = await this.ctx.model.Season.create(data);
        return result;
    }

    async update(ids: Array<string>, data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Season.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: Array<string>, type?: string) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : { type };
        const result = await this.ctx.model.Season.deleteMany(query);

        if (type) {
            let newType;
            switch (type) {
                case 'animate':
                    newType = 'Animate';
                    break;
                case 'comic':
                    newType = 'Comic';
                    break;
                case 'post':
                    newType = 'Post';
                    break;
                default:
                    return;
            }
            await this.ctx.model[newType].updateMany({ seasonRelate: { $in: ids } }, { $set: { seasonRelate: null } });
        }

        return result;
    }
}

export default SeasonService;
