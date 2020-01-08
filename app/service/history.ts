import { Service } from 'egg';

class HistoryService extends Service {
    async query(id: string) {
        const result = await this.ctx.model.History.find({ author: id })
            .sort({ createdAt: -1 })
            .skip(0)
            .limit(20)
            .populate('target', 'title _id')
            .populate('belong', 'title _id');
        return result;
    }

    async create(id: string, type: string) {
        try {
            const { state } = this.ctx;
            const author = state.user.id;

            const data = {
                author,
                onModel: type,
                target: id,
            };
            await this.existOrCreate(data);
        } catch (error) {}
    }

    async playCreate(content: any, type: string) {
        try {
            const { state } = this.ctx;
            const author = state.user.id;

            if (typeof content === 'number') return;

            const data = {
                author,
                onModel2: type,
                onModel: 'Eposide',
                target: content._id,
                belong: content.target._id,
            };
            await this.existOrCreate(data);
        } catch (error) {}
    }

    async existOrCreate(data: any) {
        const result = await this.ctx.model.History.findOne(data);
        if (!result) {
            await this.ctx.model.History.create(data);
        }

        const type = result.onModel.toLowerCase();
        if (['animate', 'comic', 'post'].includes(type)) {
            await this.ctx.service.data.create(type);
        }

        return result;
    }

    async destroy(ids: string[]) {
        const result = await this.ctx.model.History.deleteMany({
            _id: { $in: ids },
        });
        return result;
    }
}

export default HistoryService;
