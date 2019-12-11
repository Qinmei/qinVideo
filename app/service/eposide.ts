import { Service } from 'egg';

class EposideService extends Service {
    async query({ target }) {
        const query = { target };

        const result = await this.ctx.model.Eposide.find(query).sort({ sort: 1, _id: -1 });
        const total = await this.ctx.model.Eposide.find(query).countDocuments();

        return {
            list: result,
            total,
        };
    }

    async info(id: string) {
        const data = this.ctx.model.Eposide.findById(id)
            .populate('target')
            .populate('coutPlay')
            .populate('coutComment')
            .populate('coutDanmu');
        return data;
    }

    async create(data: any) {
        const result = await this.ctx.model.Eposide.create(data);
        return result;
    }

    async insertMany(data: any[]) {
        const result = await this.ctx.model.Eposide.insertMany(data);
        return result;
    }

    async update(ids: string[], data: any) {
        const result = await this.ctx.model.Eposide.updateMany({ _id: { $in: ids } }, { $set: data });
        return result;
    }

    async destroy(ids: string[]) {
        const result = await this.ctx.model.Eposide.deleteMany({
            _id: { $in: ids },
        });
        return result;
    }
}

export default EposideService;
