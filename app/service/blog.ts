import { Service } from 'egg';

class BlogService extends Service {
    async query({ page, size, sortBy = 'createdAt', sortOrder = -1, title, status, pin, hot }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query.content = { $regex: title, $options: '$i' });
        status && (query.status = status);
        pin && (query.pin = pin);
        hot && (query.hot = hot);

        const result = await this.ctx.model.Blog.find(query)
            .populate('countLike')
            .populate('countComment')
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate({ path: 'target', select: 'title slug coverVertical' })
            .populate('tag')
            .populate({ path: 'author', select: 'name avatar level introduce background' });

        const total = await this.ctx.model.Blog.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const result = await this.ctx.app.model.Blog.findById(id)
            .populate('countLike')
            .populate('countComment')
            .populate({ path: 'target', select: 'title slug coverVertical' })
            .populate('tag')
            .populate({ path: 'author', select: 'name avatar level introduce background' });
        return result;
    }

    async create(data: any) {
        const result = await this.ctx.model.Blog.create(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Blog.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Blog.deleteMany(query);
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

export default BlogService;
