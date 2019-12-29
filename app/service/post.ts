import { Service } from 'egg';
import { postCategoryLookup, authorLookup, postSelectCount, postCountAll } from '../utils/aggregation';

class PostService extends Service {
    async query({ page, size, sortBy = '_id', sortOrder = -1, status, title, kind, tag, ping, author }) {
        const mongoose = this.app.mongoose;
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.title = { $regex: title, $options: '$i' });
        status && (query.status = status);
        kind && (query.kind = { $in: [mongoose.Types.ObjectId(kind)] });
        tag && (query.tag = { $in: [mongoose.Types.ObjectId(tag)] });
        author && (query.author = { $in: [mongoose.Types.ObjectId(author)] });
        ping && (query.ping = ping);

        const result = await this.ctx.model.Post.aggregate([
            { $match: query },
            ...postSelectCount(sortBy).select,
            {
                $sort: {
                    [sortBy]: sortOrder,
                    _id: 1,
                },
            },
            { $skip: skip },
            { $limit: limit },
            ...postCategoryLookup,
            ...postSelectCount(sortBy).rest,
            authorLookup,
            postCountAll,
            {
                $project: {
                    listComment: 0,
                    listPlay: 0,
                    listLike: 0,
                    content: 0,
                    level: 0,
                    status: 0,
                    seasonRelate: 0,
                },
            },
            {
                $unwind: {
                    path: '$author',
                    preserveNullAndEmptyArrays: true,
                },
            },
        ]);

        const total = await this.ctx.model.Post.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Post.findById(id)
            .populate('countPlay')
            .populate('countLike')
            .populate('countComment')
            .populate({ path: 'author', select: 'name avatar level introduce background' })
            .populate('kind')
            .populate('tag')
            .populate({ path: 'seasons', select: 'slug season', match: { _id: { $ne: id }, status: 'publish' } })
            .populate('seasonInfo');
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
        const data = await this.ctx.model.Post.findOne({ slug })
            .populate('countPlay')
            .populate('countLike')
            .populate('countComment')
            .populate({ path: 'author', select: 'name avatar level introduce background' })
            .populate('kind')
            .populate('tag')
            .populate({ path: 'seasons', select: 'slug season', match: { slug: { $ne: slug }, status: 'publish' } })
            .populate('seasonInfo');
        return data;
    }

    async relative(id: string) {
        const data = await this.ctx.model.Animate.findById(id);
        const { tag } = data;
        const result = await this.ctx.model.Animate.find({
            tag,
        }).limit(20);
        return result.filter((item: any) => item.id !== id);
    }
}

export default PostService;
