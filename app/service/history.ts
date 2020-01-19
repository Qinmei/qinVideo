import { Service } from 'egg';

class HistoryService extends Service {
    async query(query, size = 20) {
        const result = await this.ctx.model.History.find(query)
            .sort({ createdAt: -1 })
            .limit(size)
            .populate('target', 'title _id cover sort slug')
            .populate('belong', 'title slug _id coverVertical');
        return result;
    }

    async create(id: string, type: string) {
        const { state } = this.ctx;
        const author = state.user.id;

        if (!author) return;

        const data = {
            author,
            onModel: type,
            target: id,
        };
        await this.existOrCreate(data);
    }

    async playCreate(content: any, type: string) {
        const { state } = this.ctx;
        const author = state.user.id;

        if (!author) return;
        if (typeof content === 'number') return;

        const data = {
            author,
            onModel2: type,
            onModel: 'Eposide',
            target: content._id,
            belong: content.target._id,
        };
        await this.playExistOrCreate(data);
    }

    async existOrCreate(data: any) {
        let result = await this.ctx.model.History.findOne(data);
        if (!result) {
            result = await this.ctx.model.History.create(data);
        }

        const type = result.onModel.toLowerCase();
        if (type === 'post') {
            this.ctx.service.data.create(type);
        }

        return result;
    }

    async playExistOrCreate(data: any) {
        const { author, onModel, belong, onModel2 } = data;

        let result = await this.ctx.model.History.findOne({
            author,
            onModel,
            belong,
            onModel2,
        });
        if (!result) {
            result = await this.ctx.model.History.create(data);
        } else {
            result = await this.ctx.model.History.findByIdAndUpdate(result._id, data);
        }

        const type = result.onModel2.toLowerCase();
        this.ctx.service.data.create(type);

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
