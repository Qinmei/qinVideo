const { ShopModel } = require("../models/index");

class shopController {
  // query列表
  static async shop_query(ctx) {
    const {
      size = 10,
      page = 1,
      sort = "-_id",
      title = null,
      status = null
    } = ctx.query;

    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
    const skip = (page - 1) * size;

    const shopQuery = {};
    title && (shopQuery.title = { $regex: title, $options: "$i" });
    status && (shopQuery.status = status);

    const { user } = ctx.state;
    user.level < 100 && (shopQuery.status = "active");

    const data = await ShopModel.aggregate([
      { $match: shopQuery },
      {
        $sort: {
          [sortBy]: sortOrder
        }
      },
      { $skip: skip },
      { $limit: parseInt(size) }
    ]);
    const total = await ShopModel.countDocuments(shopQuery);
    ctx.send({ data, total });
  }

  // shop post
  static async shop_post(ctx) {
    const post = ctx.request.body;
    const data = await ShopModel.create(post).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  // post Get
  static async shop_get(ctx) {
    const { id } = ctx.params;
    const data = await ShopModel.findById(id).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  // post put
  static async shop_put(ctx) {
    const { id } = ctx.params;
    const sendData = ctx.request.body;
    const data = await ShopModel.findByIdAndUpdate(id, {
      $set: sendData
    }).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  // post delete
  static async shop_delete(ctx) {
    const { id } = ctx.params;
    const data = await ShopModel.findByIdAndDelete(id).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  static async shop_put_batch(ctx) {
    const { type, list, data } = ctx.request.body;

    if (type === "all") {
      const result = await ShopModel.update(
        {},
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    } else {
      const result = await ShopModel.update(
        { _id: { $in: list } },
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    }
  }

  static async shop_delete_batch(ctx) {
    const { type, list } = ctx.request.body;

    if (type === "all") {
      const data = await ShopModel.remove({}).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data });
    } else {
      const data = await ShopModel.remove({ _id: { $in: list } }).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data });
    }
  }
}

module.exports = shopController;
