const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const {
  OrderModel,
  ShopModel,
  UserModel,
  DataModel
} = require("../models/index");

const authorLookup = {
  $lookup: {
    from: "users",
    let: { value: "$user" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$_id", "$$value"]
          }
        }
      },
      {
        $project: {
          _id: 0,
          name: 1,
          email: 1,
          expired: 1,
          level: 1,
          score: 1,
          avatar: 1,
          background: 1,
          introduce: 1
        }
      }
    ],
    as: "user"
  }
};

const shopLookup = {
  $lookup: {
    from: "shops",
    let: { value: "$shop" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$_id", "$$value"]
          }
        }
      }
    ],
    as: "shop"
  }
};

const unwindList = ["$shop", "$user"].map(item => {
  return {
    $unwind: {
      path: item,
      preserveNullAndEmptyArrays: true
    }
  };
});

class orderController {
  // 订单列表
  static async order_query(ctx) {
    const { size = 10, page = 1, sort = "-_id", id = null } = ctx.query;

    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
    const skip = (page - 1) * size;

    const shopQuery = {};
    if (id && ObjectId.isValid(id)) shopQuery._id = new ObjectId(id);

    const data = await OrderModel.aggregate([
      { $match: shopQuery },
      authorLookup,
      shopLookup,
      ...unwindList,
      {
        $sort: {
          [sortBy]: sortOrder
        }
      },
      { $skip: skip },
      { $limit: parseInt(size) }
    ]);
    const total = await OrderModel.countDocuments(shopQuery);
    ctx.send({ data, total });
  }

  // 获取订单详情
  static async order_get(ctx) {
    const { id } = ctx.params;
    const data = await OrderModel.findById(id).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  // 创建订单
  static async order_post(ctx) {
    const { user } = ctx.state;
    const { shop } = ctx.request.body;

    const shopItem = await ShopModel.findById(shop);
    if (!shopItem) return ctx.error({ code: 407, msg: "no this item" });

    const { price, upLevel, addScore, addExpired } = shopItem;
    if (shopItem && user.money >= price) {
      const data = await OrderModel.create({ shop, user: user._id }).catch(
        err => {
          return { code: 404, msg: err.message };
        }
      );
      const newUserInfo = {
        $set: { level: upLevel },
        $inc: {
          score: `+${addScore}`,
          expired: `+${addExpired}`,
          money: `-${price}`
        }
      };
      await UserModel.findByIdAndUpdate(user._id, newUserInfo);
      await DataModel.create({ type: "order" }).catch(err => err);
      ctx.send({ data });
    } else {
      return ctx.error({ code: 406, msg: "money can't afford" });
    }
  }

  // 删除订单
  static async order_delete(ctx) {
    const { id } = ctx.params;
    const data = await OrderModel.findByIdAndDelete(id).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  // 批量删除订单
  static async order_delete_batch(ctx) {
    const { type, list } = ctx.request.body;
    if (type === "all") {
      const data = await OrderModel.remove({}).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data });
    } else {
      const data = await OrderModel.remove({ _id: { $in: list } }).catch(
        err => {
          return { code: 404, msg: err.message };
        }
      );
      ctx.send({ data });
    }
  }
}

module.exports = orderController;
