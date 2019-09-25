const { getChildArray } = require("../utils/common");
const { PostModel, DataModel, CategoryModel } = require("../models/index");

const authorLookup = {
  $lookup: {
    from: "users",
    let: { value: "$author" },
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
          level: 1,
          score: 1,
          avatar: 1,
          background: 1,
          introduce: 1
        }
      }
    ],
    as: "author"
  }
};

const categoryLookup = {
  $lookup: {
    from: "categories",
    let: { value: "$category.post" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$_id", "$$value"]
          }
        }
      }
    ],
    as: "category.post"
  }
};

const unwindList = ["$category.post", "$author"].map(item => {
  return {
    $unwind: {
      path: item,
      preserveNullAndEmptyArrays: true
    }
  };
});

const relativeLookup = ["like", "unlike", "comment", "play"].map(item => {
  if (item === "like" || item === "unlike") {
    return {
      $lookup: {
        from: "users",
        let: { value: "$_id" },
        pipeline: [
          { $match: { $expr: { $in: ["$$value", `$post.${item}`] } } }
        ],
        as: `relative.${item}`
      }
    };
  } else if (item === "comment") {
    return {
      $lookup: {
        from: "comments",
        let: { value: "$slug" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$belong", "$$value"] },
                  { $eq: ["$type", "post"] }
                ]
              }
            }
          }
        ],
        as: `relative.${item}`
      }
    };
  } else if (item === "play") {
    return {
      $lookup: {
        from: "datas",
        let: { value: "$slug" },
        pipeline: [
          {
            $match: {
              $expr: { $gt: [{ $indexOfBytes: ["$target", "$$value"] }, -1] }
            }
          }
        ],
        as: `relative.${item}`
      }
    };
  }
});

const countSize = {
  like: { $size: "$relative.like" },
  unlike: { $size: "$relative.unlike" },
  comment: { $size: "$relative.comment" },
  play: { $size: "$relative.play" }
};

class postController {
  // query列表
  static async post_query(ctx) {
    const {
      size = 10,
      page = 1,
      sort = "-_id",
      title = null,
      post = null,
      status = null
    } = ctx.query;

    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
    const skip = (page - 1) * size;

    const postQuery = {};
    title && (postQuery.title = { $regex: title, $options: "$i" });
    status && (postQuery.status = status);
    if (post) {
      const postData = await CategoryModel.find({ type: "post" });
      const postList = getChildArray(postData, post);
      postQuery["category.post"] = { $in: postList };
    }

    const { user } = ctx.state;
    user.level < 100 && (postQuery.status = "publish");

    const data = await PostModel.aggregate([
      { $match: postQuery },
      authorLookup,
      categoryLookup,
      ...relativeLookup,
      ...unwindList,
      { $addFields: { ...countSize } },
      {
        $sort: {
          [sortBy]: sortOrder,
          _id: -1
        }
      },
      { $skip: skip },
      { $limit: parseInt(size) },
      {
        $project: {
          content: 0,
          relative: 0
        }
      }
    ]);
    const total = await PostModel.countDocuments(postQuery);
    ctx.send({ data, total });
  }

  // post post
  static async post_post(ctx) {
    const { user } = ctx.state;
    const post = ctx.request.body;
    post.author = user._id;
    const data = await PostModel.create(post).catch(err => {
      return { code: 404, msg: err.message };
    });

    await DataModel.create({ type: "postSend" }).catch(err => err);
    ctx.send({ data });
  }

  // post Get
  static async post_get(ctx) {
    const { slug } = ctx.params;
    const { user } = ctx.state;
    let postShow = {};
    const result = await PostModel.findOne({
      slug,
      level: { $lte: user.level }
    });
    if (!result) return ctx.error({ code: 402, msg: "权限不足" });

    if (user.level > 99) {
      postShow = { _id: 0, relative: 0 };
    } else {
      const isAuthor = await PostModel.findOne({ slug, author: user._id });
      postShow = isAuthor
        ? { _id: 0, relative: 0 }
        : { _id: 0, eposide: 0, relative: 0 };
    }
    const data = await PostModel.aggregate([
      { $match: { slug, level: { $lte: user.level } } },
      authorLookup,
      categoryLookup,
      ...relativeLookup,
      ...unwindList,
      { $addFields: { ...countSize } },
      { $project: postShow }
    ]);
    await DataModel.create({ type: "play", target: slug })
      .catch(err => err)
      .catch(err => err);
    ctx.send({ data });
  }

  // post put
  static async post_put(ctx) {
    const { slug } = ctx.params;
    const sendData = ctx.request.body;
    const { user } = ctx.state;
    if (user.level < 100) {
      const single = await PostModel.findOne({ slug: slug, author: user._id });
      if (!single) return ctx.error({ msg: "没有权限", code: 402 });
      sendData.stats && delete sendData.status;
      sendData.slug && delete sendData.slug;
    }
    const data = await PostModel.updateOne({ slug }, { $set: sendData }).catch(
      err => {
        return { code: 404, msg: err.message };
      }
    );
    ctx.send({ data });
  }

  // post delete
  static async post_delete(ctx) {
    const { slug } = ctx.params;
    const data = await PostModel.deleteOne({ slug });
    ctx.send({ data });
  }

  static async post_put_batch(ctx) {
    const { type, list, data } = ctx.request.body;
    if (type === "all") {
      const result = await PostModel.update(
        {},
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    } else {
      const result = await PostModel.update(
        { slug: { $in: list } },
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    }
  }

  static async post_delete_batch(ctx) {
    const { type, list } = ctx.request.body;
    if (type === "all") {
      const data = await PostModel.remove({});
      ctx.send({ data });
    } else {
      const data = await PostModel.remove({ slug: { $in: list } });
      ctx.send({ data });
    }
  }
}

module.exports = postController;
