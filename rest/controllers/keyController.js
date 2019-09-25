const stringRandom = require("string-random");
const { KeyModel } = require("../models/index");

class keyController {
  static async key_query(ctx) {
    const { size = 10, page = 1, sort = "-createdAt", key, status } = ctx.query;

    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
    const skip = (page - 1) * size;

    const keyQuery = {};
    key && (keyQuery.key = { $regex: key, $options: "$i" });
    status && (keyQuery.status = status);

    const data = await KeyModel.aggregate([
      { $match: keyQuery },
      {
        $sort: {
          [sortBy]: sortOrder,
          _id: -1
        }
      },
      { $skip: skip },
      { $limit: parseInt(size) }
    ]);
    const total = await KeyModel.countDocuments(keyQuery);
    ctx.send({ data, total });
  }

  // comment post
  static async key_post(ctx) {
    const { count, price } = ctx.request.body;

    const keyArray = new Array(count)
      .fill(1)
      .map(item => ({ key: stringRandom(32), price }));
    const data = await KeyModel.create(...new Set(keyArray)).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  static async key_delete(ctx) {
    const { id } = ctx.params;

    const data = await KeyModel.findByIdAndDelete(id).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  static async key_delete_batch(ctx) {
    const { type, list } = ctx.request.body;

    if (type === "all") {
      const data = await KeyModel.remove({}).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data });
    } else {
      const data = await KeyModel.remove({ _id: { $in: list } }).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data });
    }
  }
}

module.exports = keyController;
