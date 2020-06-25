import { Service } from 'egg';
import { postCategoryLookup, authorLookup, countLookup, seasonLookup, filterProject } from '../utils/aggregation';

class PostService extends Service {
    async query({ page, size, sortBy = '_id', sortOrder = -1, status, title, kind, tag, author }) {
        const mongoose = this.app.mongoose;
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.title = { $regex: title, $options: '$i' });
        status && (query.status = status);
        kind && (query.kind = { $in: [mongoose.Types.ObjectId(kind)] });
        tag && (query.tag = { $in: [mongoose.Types.ObjectId(tag)] });
        author && (query.author = { $in: [mongoose.Types.ObjectId(author)] });

        const result = await this.ctx.model.Post.aggregate([
            { $match: query },
            ...countLookup,
            {
                $sort: {
                    [sortBy]: sortOrder,
                    _id: 1,
                },
            },
            { $skip: skip },
            { $limit: limit },
            ...postCategoryLookup,
            ...authorLookup,
            ...filterProject,
        ]);

        const total = await this.ctx.model.Post.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Post.findById(id).populate('kind').populate('tag');
        return data;
    }

    async create(data: any) {
        const result = await this.ctx.model.Post.create(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Post.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Post.deleteMany(query);
        return result;
    }

    // frontend
    async slug(slug: string) {
        const result = await this.ctx.model.Post.aggregate([
            {
                $match: {
                    slug,
                    status: 'publish',
                },
            },
            seasonLookup('post'),
            ...countLookup,
            ...postCategoryLookup,
            ...authorLookup,
        ]);
        if (!result[0]) throw 'no data';
        return result[0];
    }

    async relative(id: string) {
        const data = await this.ctx.model.Post.findById(id);
        const { tag } = data;
        const result = await this.ctx.model.Post.find({
            tag,
        }).limit(20);
        return result.filter((item: any) => item.id !== id);
    }
}

export default PostService;
