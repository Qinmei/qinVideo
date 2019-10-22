import { Service } from "egg";

class DanmuService extends Service {
  async query({ page, size, sortBy, sortOrder, name, player }) {
    const skip: number = (page - 1) * size;
    const limit: number = size;

    const query: any = {};
    name && (query.text = { $regex: name, $options: "$i" });
    player && (query.player = { $regex: player, $options: "$i" });

    const result = await this.ctx.model.Danmu.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder, _id: -1 });

    const total = await this.ctx.model.Danmu.find(query).countDocuments();

    return {
      list: result,
      total
    };
  }

  async info(id: string) {
    const data = this.ctx.model.Danmu.findById(id);
    return data;
  }

  async create(data: any) {
    const result = await this.ctx.model.Danmu.create(data);
    return result;
  }

  async update(ids: Array<string>, data: any) {
    const result = await this.ctx.model.Danmu.updateMany(
      { _id: { $in: ids } },
      { $set: data }
    );
    return result;
  }

  async destroy(ids: Array<string>) {
    const result = await this.ctx.model.Danmu.deleteMany({
      _id: { $in: ids }
    });
    return result;
  }
}

export default DanmuService;
