const Service = require("egg").Service;
class UserService extends Service {
  async query({ page, size, sort }) {
    const skip = (Number(page) - 1) * Number(size);
    const limit = Number(size);

    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;

    const query = {};

    const result = await this.ctx.model.User.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder, _id: -1 });

    const total = await this.ctx.model.User.find(query).count();

    return {
      list: result,
      total
    };
  }
}
module.exports = UserService;
