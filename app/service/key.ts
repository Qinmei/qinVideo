import { Service } from "egg";

class KeyService extends Service {
  async query({ page, size, sortBy, sortOrder, name, status }) {
    const skip: number = (page - 1) * size;
    const limit: number = size;

    const query: any = {};
    name && (query.name = { $regex: name, $options: "$i" });
    status && (query.status = status);

    const result = await this.ctx.model.Key.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder, _id: -1 });

    const total = await this.ctx.model.Key.find(query).countDocuments();

    return {
      list: result,
      total
    };
  }

  async info(id: string) {
    const data = this.ctx.model.Key.findById(id);
    return data;
  }

  async create(data: any) {
    const result = await this.ctx.model.Key.create(data);
    return result;
  }

  async update(ids: Array<string>, data: any) {
    const result = await this.ctx.model.Key.updateMany(
      { _id: { $in: ids } },
      { $set: data }
    );
    return result;
  }

  async destroy(ids: Array<string>) {
    const result = await this.ctx.model.Key.deleteMany({
      _id: { $in: ids }
    });
    return result;
  }
}

export default KeyService;
