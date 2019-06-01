const mongoose = require("mongoose");
const stringRandom = require("string-random");
const { MD5 } = require("../utils/common");
const config = require("../../config");
const {
  UserModel,
  AnimateModel,
  PostModel,
  ComicModel,
  CommentModel,
  DataModel
} = require("../models/index");

const animateLookup = ["own", "like", "unlike", "history"].map(item => {
  if (item === "own") {
    return {
      $lookup: {
        from: "animates",
        let: { value: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$author", "$$value"]
              }
            }
          },
          {
            $project: {
              title: 1,
              slug: 1,
              status: 1,
              information: 1,
              updatedAt: 1,
              cover: 1
            }
          }
        ],
        as: `animate.${item}`
      }
    };
  } else {
    return {
      $lookup: {
        from: "animates",
        let: { value: `$animate.${item}` },
        pipeline: [
          {
            $match: {
              $expr: {
                $in: ["$_id", "$$value"]
              }
            }
          },
          {
            $project: {
              title: 1,
              slug: 1,
              status: 1,
              information: 1,
              updatedAt: 1,
              cover: 1
            }
          }
        ],
        as: `animate.${item}`
      }
    };
  }
});

const comicLookup = ["own", "like", "unlike", "history"].map(item => {
  if (item === "own") {
    return {
      $lookup: {
        from: "comics",
        let: { value: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$author", "$$value"]
              }
            }
          },
          {
            $project: {
              title: 1,
              slug: 1,
              status: 1,
              information: 1,
              updatedAt: 1,
              cover: 1
            }
          }
        ],
        as: `comic.${item}`
      }
    };
  } else {
    return {
      $lookup: {
        from: "comics",
        let: { value: `$comic.${item}` },
        pipeline: [
          {
            $match: {
              $expr: {
                $in: ["$_id", "$$value"]
              }
            }
          },
          {
            $project: {
              title: 1,
              slug: 1,
              status: 1,
              information: 1,
              updatedAt: 1,
              cover: 1
            }
          }
        ],
        as: `comic.${item}`
      }
    };
  }
});

const postLookup = ["own", "like", "unlike", "history"].map(item => {
  if (item === "own") {
    return {
      $lookup: {
        from: "posts",
        let: { value: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$author", "$$value"]
              }
            }
          },
          {
            $project: {
              title: 1,
              slug: 1,
              status: 1,
              introduce: 1,
              cover: 1
            }
          }
        ],
        as: `post.${item}`
      }
    };
  } else {
    return {
      $lookup: {
        from: "posts",
        let: { value: `$post.${item}` },
        pipeline: [
          {
            $match: {
              $expr: {
                $in: ["$_id", "$$value"]
              }
            }
          },
          {
            $project: {
              title: 1,
              slug: 1,
              status: 1,
              introduce: 1,
              cover: 1
            }
          }
        ],
        as: `post.${item}`
      }
    };
  }
});

const commentLookup = ["own", "like", "unlike"].map(item => {
  if (item === "own") {
    return {
      $lookup: {
        from: "comments",
        let: { value: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$author", "$$value"]
              }
            }
          },
          {
            $project: {
              _id: 1,
              content: 1,
              image: 1,
              video: 1,
              status: 1
            }
          }
        ],
        as: `comment.${item}`
      }
    };
  } else {
    return {
      $lookup: {
        from: "comments",
        let: { value: `$comment.${item}` },
        pipeline: [
          {
            $match: {
              $expr: {
                $in: ["$_id", "$$value"]
              }
            }
          },
          {
            $project: {
              _id: 1,
              content: 1,
              image: 1,
              video: 1,
              status: 1
            }
          }
        ],
        as: `comment.${item}`
      }
    };
  }
});

const reportLookup = {
  $lookup: {
    from: "reports",
    let: { value: "$_id" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$author", "$$value"]
          }
        }
      }
    ],
    as: "report"
  }
};

const orderLookup = {
  $lookup: {
    from: "orders",
    let: { value: "$_id" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$user", "$$value"]
          }
        }
      }
    ],
    as: "order"
  }
};

class userController {
  // query列表
  static async user_query(ctx) {
    const {
      size = 10,
      page = 1,
      sort = "-createdAt",
      name = null,
      email = null,
      status = null
    } = ctx.query;
    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
    const skip = (page - 1) * size;

    const userQuery = {};
    name && (userQuery.name = { $regex: name, $options: "$i" });
    email && (userQuery.email = { $regex: email, $options: "$i" });
    status && (userQuery.status = status);

    const data = await UserModel.aggregate([
      { $match: userQuery },
      animateLookup[0],
      comicLookup[0],
      postLookup[0],
      commentLookup[0],
      reportLookup,
      orderLookup,
      {
        $project: {
          count: {
            post: { $size: "$post.own" },
            animate: { $size: "$animate.own" },
            comic: { $size: "$comic.own" },
            comment: { $size: "$comment.own" },
            report: { $size: "$report" },
            order: { $size: "$order" }
          },
          _id: 0,
          name: 1,
          email: 1,
          level: 1,
          score: 1,
          avatar: 1,
          background: 1,
          introduce: 1,
          status: 1,
          money: 1,
          expired: 1,
          createdAt: 1
        }
      },
      {
        $sort: {
          [sortBy]: sortOrder
        }
      },
      { $skip: skip },
      { $limit: parseInt(size) }
    ]).catch(err => {
      return { code: 404, msg: err.message };
    });
    const total = await UserModel.countDocuments(userQuery);
    ctx.send({ data, total });
  }

  // post Get
  static async user_get(ctx) {
    const { slug } = ctx.params;
    const { user } = ctx.state;
    let userShow = {};
    if (user.level < 100) {
      if (slug === user.name) {
        userShow = { refreshToken: 0, password: 0 };
      } else {
        userShow = {
          _id: 0,
          name: 1,
          email: 1,
          level: 1,
          score: 1,
          avatar: 1,
          background: 1,
          introduce: 1,
          status: 1,
          createdAt: 1,
          animate: 1,
          posts: 1,
          comment: 1
        };
      }
    } else {
      userShow = { _id: 0, refreshToken: 0, password: 0 };
    }

    const data = await UserModel.aggregate([
      {
        $match: {
          name: slug
        }
      },
      ...animateLookup,
      ...comicLookup,
      ...postLookup,
      ...commentLookup,
      reportLookup,
      orderLookup,
      { $project: userShow }
    ]);
    ctx.send({ data });
  }

  static async user_post(ctx) {
    const userInfo = ctx.request.body;
    const newPass = MD5(config.salt + userInfo.password);
    const refreshToken =
      new mongoose.Types.ObjectId().toString() + stringRandom(16);
    const data = await UserModel.create({
      ...userInfo,
      password: newPass,
      refreshToken
    }).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  // post put
  static async user_put(ctx) {
    const { slug } = ctx.params;
    const data = ctx.request.body;
    const { user } = ctx.state;
    if (user.level > 99) {
      Object.keys(data).map(item => {
        ![
          "name",
          "email",
          "level",
          "score",
          "avatar",
          "background",
          "introduce",
          "status",
          "money",
          "expired"
        ].includes(item) && delete data[item];
      });
      const result = await UserModel.updateOne(
        { name: slug },
        { $set: data }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    } else if (user.name == slug) {
      Object.keys(data).map(item => {
        !["email", "avatar", "background", "introduce"].includes(item) &&
          delete data[item];
      });
      const result = await UserModel.updateOne(
        { name: slug },
        { $set: data }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    } else {
      ctx.error({ msg: "没有权限", code: 402 });
    }
  }

  // animate delete
  static async user_delete(ctx) {
    const { slug } = ctx.params;
    const result = await UserModel.deleteOne({ name: slug });
    ctx.send({ data: result });
  }

  static async user_put_batch(ctx) {
    const { type, list, data } = ctx.request.body;

    const arr = await UserModel.find({ level: 100 });
    const adminList = [];
    if (arr.length > 0) {
      arr.map(item => {
        adminList.push(item.name);
      });
    }

    if (type === "all") {
      const result = await UserModel.update(
        { name: { $nin: adminList } },
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    } else {
      const result = await UserModel.update(
        { $and: [{ name: { $in: list } }, { name: { $nin: adminList } }] },
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    }
  }

  static async user_delete_batch(ctx) {
    const { type, list } = ctx.request.body;

    const arr = await UserModel.find({ level: 100 });
    const adminList = [];
    if (arr.length > 0) {
      arr.map(item => {
        adminList.push(item.name);
      });
    }

    if (type === "all") {
      const data = await UserModel.remove({ name: { $nin: adminList } }).catch(
        err => {
          return { code: 404, msg: err.message };
        }
      );
      ctx.send({ data });
    } else {
      const data = await UserModel.remove({
        $and: [{ name: { $in: list } }, { name: { $nin: adminList } }]
      }).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data });
    }
  }

  static async user_action(ctx) {
    const { type, kind, slug } = ctx.request.body;
    const { user } = ctx.state;
    const userInfo = await UserModel.findById(user._id);
    const userArr = userInfo[type][kind];

    let data;
    if (type === "animate") {
      data = await AnimateModel.findOne({ slug });
    } else if (type === "post") {
      data = await PostModel.findOne({ slug });
    } else if (type === "comic") {
      data = await ComicModel.findOne({ slug });
    } else if (type === "comment") {
      data = await CommentModel.findOne({ slug });
    }

    const id = data._id;

    if (userArr.indexOf(id) > -1) {
      userArr.splice(userArr.findIndex(item => item === id), 1);
    } else {
      userArr.push(id);
    }
    await UserModel.findByIdAndUpdate(
      user._id,
      { $set: userInfo },
      { new: true, select: { comic: 1, post: 1, animate: 1, comment: 1 } }
    );

    const target = data.slug;
    const dataType = kind === "like" ? `${type}Like` : `${type}Unlike`;
    const newData = await DataModel.findOne({
      target,
      type: dataType,
      author: user.name
    });
    if (!newData) {
      await DataModel.create({
        target,
        type: dataType,
        author: user.name
      }).catch(err => err);
    }
    ctx.send({ data });
  }
}

module.exports = userController;
