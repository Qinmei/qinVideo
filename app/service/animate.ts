import { Service } from 'egg';
import {
    categoryLookup,
    authorLookup,
    countAll,
    selectCount,
    listAll,
    rateLookup,
    seasonLookup,
    eposideLookup,
} from '../utils/aggregation';

interface Query {
    page: number;
    size: number;
    sortBy?: string;
    sortOrder?: number;
    title?: string;
    status?: string;
    update?: string;
    area?: string;
    kind?: string;
    tag?: string;
    year?: string;
    level?: number;
}

class AnimateService extends Service {
    async query({
        page,
        size,
        sortBy = '_id',
        sortOrder = -1,
        title,
        status,
        update,
        area,
        kind,
        tag,
        year,
        level,
    }: Query) {
        const mongoose = this.app.mongoose;
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.title = { $regex: title, $options: '$i' });
        status && (query.status = status);
        update && (query.isUpdate = update === 'true');
        area && (query.area = { $in: [mongoose.Types.ObjectId(area)] });
        year && (query.year = { $in: [mongoose.Types.ObjectId(year)] });
        kind && (query.kind = { $in: [mongoose.Types.ObjectId(kind)] });
        tag && (query.tag = { $in: [mongoose.Types.ObjectId(tag)] });
        level && (query.level = { $lte: level });

        // const result = await this.ctx.model.Animate.find(query)
        // 	.populate('countPlay')
        // 	.populate('countLike')
        // 	.populate('countComment')
        // 	.populate('countDanmu')
        // 	.populate('countEposide')
        // 	.sort({ [sortBy]: sortOrder, _id: -1 })
        // 	.skip(skip)
        // 	.limit(limit)
        // 	.populate({ path: 'author', select: 'name avatar level introduce background' })
        // 	.populate('area')
        // 	.populate('kind')
        // 	.populate('year')
        // 	.populate('tag');

        const result = await this.ctx.model.Animate.aggregate([
            { $match: query },
            ...selectCount(sortBy).select,
            {
                $sort: {
                    [sortBy]: sortOrder,
                    _id: 1,
                },
            },
            { $skip: skip },
            { $limit: limit },
            ...categoryLookup,
            ...selectCount(sortBy).rest,
            authorLookup,
            countAll,
            {
                $project: {
                    listComment: 0,
                    listPlay: 0,
                    listDanmu: 0,
                    listEposide: 0,
                    listLike: 0,
                },
            },
        ]);

        const total = await this.ctx.model.Animate.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        // const result = this.ctx.model.Animate.findById(id)
        // 	.populate('countPlay')
        // 	.populate('countLike')
        // 	.populate('countComment')
        // 	.populate('countDanmu')
        // 	.populate({ path: 'author', select: 'name avatar level introduce background' })
        // 	.populate('area')
        // 	.populate('kind')
        // 	.populate('year')
        // 	.populate('tag')
        // 	.populate({ path: 'seasons', select: 'slug season', match: { _id: { $ne: id }, status: 'publish' } })
        // 	.populate('seasonInfo');
        //  return result;
        const mongoose = this.app.mongoose;
        const result = await this.ctx.model.Animate.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id),
                },
            },
            ...categoryLookup,
            ...Object.values(listAll),
            ...rateLookup,
            authorLookup,
            seasonLookup('animate'),
            countAll,
            {
                $project: {
                    listComment: 0,
                    listPlay: 0,
                    listDanmu: 0,
                    listEposide: 0,
                    listLike: 0,
                },
            },
        ]);
        return result.length > 0 ? result[0] : 12001;
    }

    async create(data: any) {
        const result = await this.ctx.model.Animate.create(data);
        return result;
    }

    async import(data: any) {
        const result = await this.create(data);

        const { eposide = [] } = data;

        eposide.map((item) => {
            item.target = result._id;
            item.onModel = 'Animate';
        });

        const eposideData = await this.ctx.service.eposide.create(eposide).catch(() => false);

        if (!eposideData) {
            await this.destroy([result._id]);
        }

        return eposideData;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Animate.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Animate.deleteMany(query);
        return result;
    }

    // frontend
    async slug(slug: string) {
        const result = await this.ctx.model.Animate.aggregate([
            {
                $match: {
                    slug,
                },
            },
            ...categoryLookup,
            ...Object.values(listAll),
            ...rateLookup,
            authorLookup,
            seasonLookup('animate'),
            eposideLookup,
            countAll,
            {
                $project: {
                    listComment: 0,
                    listPlay: 0,
                    listDanmu: 0,
                    listEposide: 0,
                    listLike: 0,
                },
            },
        ]);
        return result.length > 0 ? result[0] : 12001;
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

export default AnimateService;
