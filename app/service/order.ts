import { Service } from 'egg';

class OrderService extends Service {
    async query({ page, size, sortBy, sortOrder, title }) {
        const skip: number = (page - 1) * size;
        const limit: number = size;

        const query: any = {};
        title && (query._id = { $in: [title] });

        const result = await this.ctx.model.Order.find(query)
            .sort({ [sortBy]: sortOrder, _id: -1 })
            .skip(skip)
            .limit(limit)
            .populate('shop')
            .populate('user');

        const total = await this.ctx.model.Order.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = await this.ctx.model.Order.findById(id)
            .populate('shop')
            .populate('user');
        return data;
    }

    async create(data: any) {
        const { user, shop } = data;

        const userInfo = await this.ctx.service.user.info(user);
        const shopInfo = await this.ctx.service.shop.info(shop);

        const { money, _id, score, expired } = userInfo;
        const { price, upLevel = 0, addScore = 0, addExpired = 0 } = shopInfo;

        if (money < price) return 20005;

        await this.ctx.service.user.update([_id], {
            level: upLevel,
            score: score + addScore,
            expired: expired + addExpired,
            money: money - price,
        });

        const result = await this.ctx.model.Order.create(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Order.updateMany(query, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const query = ids.length > 0 ? { _id: { $in: ids } } : {};
        const result = await this.ctx.model.Order.deleteMany(query);
        return result;
    }
}

export default OrderService;
