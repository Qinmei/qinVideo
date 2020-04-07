import { Service } from 'egg';
import * as moment from 'moment';

class DataService extends Service {
    async query({ target, startTime = '2018-06-24', endTime = '2019-08-08' }) {
        const dataQuery: any = {
            createdAt: {
                $gte: new Date(startTime),
                $lte: new Date(endTime),
            },
        };

        target && (dataQuery.target = { $regex: target, $options: '$i' });

        const data = await this.ctx.model.Data.aggregate([
            {
                $match: dataQuery,
            },
            {
                $project: {
                    day: { $substr: [{ $add: ['$createdAt', 28800000] }, 0, 10] },
                    target: 1,
                    type: 1,
                },
            },
            {
                $group: {
                    _id: {
                        date: '$day',
                        type: '$type',
                    },
                    count: { $sum: 1 },
                },
            },
            {
                $group: {
                    _id: '$_id.date',
                    data: {
                        $push: {
                            type: '$_id.type',
                            count: '$count',
                        },
                    },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);

        return data;
    }

    async todayData() {
        const data = await this.ctx.model.Data.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(moment().format('YYYY-MM-DD ') + '00:00:00'),
                        $lte: new Date(moment().format('YYYY-MM-DD ') + '23:59:59'),
                    },
                },
            },
            {
                $project: {
                    hour: { $substr: [{ $add: ['$createdAt', 28800000] }, 0, 13] },
                    type: 1,
                },
            },
            {
                $group: {
                    _id: {
                        date: '$hour',
                        type: '$type',
                    },
                    count: { $sum: 1 },
                },
            },
            {
                $group: {
                    _id: '$_id.date',
                    data: {
                        $push: {
                            type: '$_id.type',
                            count: '$count',
                        },
                    },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);

        return data;
    }

    async search({ startTime, endTime }) {
        const data = await this.ctx.model.Data.aggregate([
            {
                $match: {
                    type: 'search',
                    createdAt: {
                        $gte: new Date(startTime),
                        $lte: new Date(endTime),
                    },
                },
            },
            {
                $group: {
                    _id: '$target',
                    count: { $sum: 1 },
                },
            },
        ]);

        return data;
    }

    async workData() {
        const animateAll = await this.ctx.model.Animate.countDocuments();
        const animateDraft = await this.ctx.model.Animate.countDocuments({
            status: 'draft',
        });

        const postAll = await this.ctx.model.Post.countDocuments();
        const postDraft = await this.ctx.model.Post.countDocuments({ status: 'draft' });

        const commentAll = await this.ctx.model.Comment.countDocuments();
        const commentDraft = await this.ctx.model.Comment.countDocuments({
            status: 'draft',
        });

        const comicAll = await this.ctx.model.Comic.countDocuments();
        const comicDraft = await this.ctx.model.Comic.countDocuments({ status: 'draft' });

        const data = {
            animateAll,
            animateDraft,
            postAll,
            postDraft,
            commentAll,
            commentDraft,
            comicAll,
            comicDraft,
        };

        return data;
    }

    async activeSort({ startTime, endTime, type }) {
        const model = type === 'history' ? 'History' : 'Relation';
        const target = type === 'history' ? '$belong' : '$target';
        const onModel = type === 'history' ? 'onModel2' : 'onModel';
        const result = this.ctx.model[model].aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(startTime),
                        $lte: new Date(endTime),
                    },
                    [onModel]: {
                        $in: ['Animate', 'Comic', 'Post'],
                    },
                },
            },
            {
                $group: {
                    _id: target,
                    count: { $sum: 1 },
                },
            },
            {
                $sort: {
                    count: -1,
                },
            },
            { $limit: 10 },
            {
                $lookup: {
                    from: 'animates',
                    let: { id: '$_id' },
                    pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$id'] } } }, { $project: { title: 1 } }],
                    as: 'animate',
                },
            },
            {
                $lookup: {
                    from: 'comics',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'comic',
                },
            },
            {
                $lookup: {
                    from: 'posts',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'post',
                },
            },
            {
                $unwind: {
                    path: '$animate',
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $unwind: {
                    path: '$comic',
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $unwind: {
                    path: '$post',
                    preserveNullAndEmptyArrays: true,
                },
            },
        ]);

        return result;
    }

    async create(type: string, target?: string) {
        const { host, ip, state } = this.ctx;
        const author = state.user.name;

        const data = {
            type,
            host,
            ip,
            author,
            target,
        };

        let dataTemp = (await this.ctx.service.utils.cacheGet('dataTemp')) || [];
        dataTemp.push(data);

        if (dataTemp.length > this.ctx.app.config.maxProxyCount) {
            await this.ctx.model.Data.create(dataTemp);
            dataTemp = [];
        }
        await this.ctx.service.utils.cacheSet('dataTemp', dataTemp);
    }

    async destroy(start: string, end: string) {
        const result = await this.ctx.model.Data.deleteMany({ $gte: start, $lte: end });
        return result;
    }
}

export default DataService;
