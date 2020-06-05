import { Service } from 'egg';

class HistoryService extends Service {
    async query(query, type) {
        let result = await this.ctx.model.History.find(query)
            .sort({ createdAt: -1 })
            .limit(100)
            .populate({
                path: 'target',
                populate: [
                    {
                        path: 'target',
                        select: 'title slug _id coverVertical',
                    },
                ],
                select: 'title _id sort target onModel',
            });

        result = JSON.parse(JSON.stringify(result))
            .filter((item) =>
                ['animate', 'comic'].includes(type) ? item?.target?.onModel.toLowerCase() === type : true
            )
            .slice(0, 20)
            .map((item) => ({
                ...item,
                belong: item?.target?.target,
            }));

        return result;
    }

    async playCreate(result: any, type: string) {
        if (typeof result === 'number') return;
        const { _id } = result;

        this.create(_id, type);
    }

    async create(target: string, onModel: string) {
        const { state, service } = this.ctx;
        const author = state.user.id;

        const data = {
            author,
            target,
            onModel,
        };

        if (author) {
            this.update(data);
        }

        const type = author ? 'play' : 'view';
        service.count.create(author, target, onModel, type);
    }

    async update(data: any) {
        let update = { updatedAt: new Date() };
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        const result = await this.ctx.model.History.findOneAndUpdate(data, update, options);
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
