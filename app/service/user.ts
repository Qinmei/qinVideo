import { Service } from "egg";

class UserService extends Service {
  async query({ page, size, sort, sortBy, sortOrder }) {
    const skip = (page - 1) * size;
    const limit = size;

    const query = {};

    console.log(typeof page);
    const result = await this.ctx.model.User.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder, _id: -1 });

    const total = await this.ctx.model.User.find(query).countDocuments();

    return {
      list: result,
      total
    };
  }

  async info(id: string) {}

  async create(data: any) {}

  async update(ids: Array<string>, data: any) {}

  async destroy(ids: Array<string>) {}
}

export default UserService;
