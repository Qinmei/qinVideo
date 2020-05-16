import { Service } from 'egg';
import * as uuidv4 from 'uuid/v4';

class UserService extends Service {
    async query({ page, size, sortBy = 'createdAt', sortOrder = -1, title, email, status }) {
        const skip = (page - 1) * size;
        const limit = size;

        const query: any = {
            level: { $lte: 1000 },
        };
        title && (query.name = { $regex: title, $options: '$i' });
        email && (query.email = { $regex: email, $options: '$i' });
        status && (query.status = status);

        const result = await this.ctx.model.User.find(query)
            .populate('countAnimate')
            .populate('countComic')
            .populate('countPost')
            .populate('countComment')
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .select('-refreshToken -password');

        const total = await this.ctx.model.User.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async exist(data: any) {
        const result = await this.ctx.model.User.findOne(data);
        return result;
    }

    async info(id: string) {
        const result = await this.ctx.model.User.findById(id).select('-refreshToken -password');
        return result;
    }

    async cacheInfo(id: string) {
        const { service } = this.ctx;
        const userCache = await service.utils.cacheGet('user' + id);
        if (userCache) return userCache;

        const result = await this.ctx.model.User.findById(id).select('-refreshToken -password');
        result && (await service.utils.cacheSet('user' + id, result));
        return result;
    }

    async create(data: any) {
        const uuid = uuidv4();
        let result = await this.ctx.model.User.create({
            ...data,
            refreshToken: uuid,
        });
        result = result.toJSON();
        delete result.refreshToken;
        delete result.password;
        delete result.status;
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : { level: { $lte: 99 } };
        const result = await this.ctx.model.User.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : { level: { $lte: 99 } };
        const result = await this.ctx.model.User.deleteMany(query);
        return result;
    }

    // frontend
    async slug(id: string) {
        const result = await this.ctx.model.User.findById(id).select(
            'name email level score avatar background introduce status'
        );
        return result;
    }

    async likeRelation(list: any[], user: string) {
        const result = await this.ctx.model.Relation.find({
            target: { $in: list },
            author: user,
        });
        return result;
    }

    async edit(id: string, data: any) {
        const result = await this.ctx.model.User.findByIdAndUpdate(id, data, { new: true }).select(
            '-refreshToken -password'
        );
        return result;
    }

    async typeList(type: string, query: any) {
        const result = await this.ctx.service[type].query(query);
        return result;
    }

    async baseInfo(id: string) {
        const query = {
            page: 1,
            size: 6,
            status: 'publish',
            author: id,
        };
        const animate = await this.typeList('animate', query);
        const comic = await this.typeList('comic', query);
        const post = await this.typeList('post', query);

        return {
            animate: animate.list,
            comic: comic.list,
            post: post.list,
        };
    }
}

export default UserService;
