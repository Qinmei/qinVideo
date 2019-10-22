import { Service } from "egg";

class ShopService extends Service {
  async query({ page, size, sortBy, sortOrder, name, status }) {
    const skip: number = (page - 1) * size;
    const limit: number = size;

    const query: any = {};
    name && (query.title = { $regex: name, $options: "$i" });
    status && (query.status = status);

    const result = await this.ctx.model.Shop.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder, _id: -1 });

    const total = await this.ctx.model.Shop.find(query).countDocuments();

    return {
      list: result,
      total
    };
  }

  async info(id: string) {
    const data = this.ctx.model.Shop.findById(id);
    return data;
  }

  async create(data: any) {
    const result = await this.ctx.model.Shop.create(data);
    return result;
  }

  async update(ids: Array<string>, data: any) {
    const result = await this.ctx.model.Shop.updateMany(
      { _id: { $in: ids } },
      { $set: data }
    );
    return result;
  }

  async destroy(ids: Array<string>) {
    const result = await this.ctx.model.Shop.deleteMany({
      _id: { $in: ids }
    });
    return result;
  }
}

export default ShopService;
