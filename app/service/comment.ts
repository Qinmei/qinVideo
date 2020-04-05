import { Service } from 'egg';

class CommentService extends Service {
    async query({ page, size, sortBy = 'createdAt', sortOrder = -1, title, target, status }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.content = { $regex: title, $options: '$i' });
        status && (query.status = status);
        target && (query.target = target);

        const result = await this.ctx.model.Comment.find(query)
            .populate('countLike')
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
                select: 'title target onModel name content',
            })
            .populate({ path: 'author', select: 'name avatar level introduce background' })
            .populate({
                path: 'replyTo',
                select: 'name avatar level introduce background',
            });

        const total = await this.ctx.model.Comment.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info({ page, size, sortBy, sortOrder, title, target, status }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {
            parent: null,
        };
        title && (query.content = { $regex: title, $options: '$i' });
        status && (query.status = status);
        target && (query.target = target);

        const result = await this.ctx.model.Comment.find(query)
            .populate('countLike')
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate({
                path: 'children',
                populate: [
                    {
                        path: 'author',
                        select: 'name avatar level introduce background',
                    },
                    {
                        path: 'countLike',
                    },
                    {
                        path: 'replyTo',
                        select: 'name avatar level introduce background',
                    },
                ],
            })
            .populate({ path: 'author', select: 'name avatar level introduce background' });

        const total = await this.ctx.model.Comment.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async create(data: any) {
        const result = await this.ctx.model.Comment.create(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Comment.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Comment.deleteMany(query);
        return result;
    }

    // frontend
    async list({ page, size, target }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const config = await this.ctx.service.config.cacheInfo();

        const query: any = {
            target,
            status: config.commentVerify ? 'draft' : 'publish',
            parent: null,
        };

        const result = await this.ctx.model.Comment.find(query)
            .populate('countLike')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate({ path: 'author', select: 'name avatar level introduce background' })
            .populate({
                path: 'replyTo',
                select: 'name avatar level introduce background',
            })
            .populate({
                path: 'children',
                populate: [
                    {
                        path: 'author',
                        select: 'name avatar level introduce background',
                    },
                    {
                        path: 'countLike',
                    },
                    {
                        path: 'replyTo',
                        select: 'name avatar level introduce background',
                    },
                ],
                options: { sort: { createdAt: 1 }, limit: 3 },
                match: {
                    status: 'publish',
                },
            })
            .populate('childrenCount');

        const total = await this.ctx.model.Comment.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async single(id, page = 1, size = 20) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const result = await this.ctx.model.Comment.findById(id)
            .populate('countLike')
            .populate({ path: 'author', select: 'name avatar level introduce background' })
            .populate({
                path: 'replyTo',
                select: 'name avatar level introduce background',
            })
            .populate({
                path: 'children',
                populate: [
                    {
                        path: 'author',
                        select: 'name avatar level introduce background',
                    },
                    {
                        path: 'countLike',
                    },
                    {
                        path: 'replyTo',
                        select: 'name avatar level introduce background',
                    },
                ],
                options: { sort: { createdAt: 1 }, skip, limit },
                match: {
                    status: 'publish',
                },
            })
            .populate('childrenCount');
        return result;
    }

    async addLike(list: any[], userId: string) {
        let newList = JSON.parse(JSON.stringify(list));
        const all: string[] = [];

        newList.map((item: any) => {
            all.push(item._id);
            const child = item.children.map((ele: any) => ele._id);
            all.push(...child);
        });

        if (all.length !== 0) {
            const check = await this.ctx.service.user.likeRelation(all, userId);
            const likeArr = check.map((item: any) => item.target.toString());

            newList = newList.map((item: any) => {
                if (likeArr.includes(item._id.toString())) {
                    item.isLiked = true;
                }
                item.children.map((ele: any) => {
                    if (likeArr.includes(ele._id)) ele.isLiked = true;
                });
                return item;
            });
        }
        return newList;
    }
}

export default CommentService;
