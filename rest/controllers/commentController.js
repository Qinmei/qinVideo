const { CommentModel, DataModel } = require("../models/index");
const mongoose = require("mongoose");
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

const replyToLookup = {
  $lookup: {
    from: "users",
    let: { value: "$replyTo" },
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
          name: 1,
          level: 1,
          score: 1,
          avatar: 1,
          background: 1,
          introduce: 1
        }
      }
    ],
    as: "replyTo"
  }
};

const animateLookup = {
  $lookup: {
    from: "animates",
    let: { value: "$belong" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$slug", "$$value"]
          }
        }
      },
      {
        $project: {
          title: 1,
          slug: 1,
          status: 1
        }
      }
    ],
    as: "title.animate"
  }
};

const postLookup = {
  $lookup: {
    from: "posts",
    let: { value: "$belong" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$slug", "$$value"]
          }
        }
      },
      {
        $project: {
          title: 1,
          slug: 1,
          status: 1
        }
      }
    ],
    as: "title.post"
  }
};

const comicLookup = {
  $lookup: {
    from: "comics",
    let: { value: "$belong" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$slug", "$$value"]
          }
        }
      },
      {
        $project: {
          title: 1,
          slug: 1,
          status: 1
        }
      }
    ],
    as: "title.comic"
  }
};

const unwindList = [
  "$author",
  "$title",
  "$title.animate",
  "$title.post",
  "$title.comic"
].map(item => {
  return {
    $unwind: {
      path: item,
      preserveNullAndEmptyArrays: true
    }
  };
});

const relativeLookup = ["like", "unlike"].map(item => {
  return {
    $lookup: {
      from: "users",
      let: { value: "$_id" },
      pipeline: [
        { $match: { $expr: { $in: ["$$value", `$comment.${item}`] } } },
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
      as: `relative.${item}`
    }
  };
});

const countSize = {
  like: { $size: "$relative.like" },
  unlike: { $size: "$relative.unlike" }
};

const childrenLookup = {
  $lookup: {
    from: "comments",
    let: { value: "$_id" },
    pipeline: [
      {
        $match: {
          $expr: {
            $eq: ["$parent", "$$value"]
          }
        }
      },
      authorLookup,
      replyToLookup,
      ...relativeLookup,
      {
        $unwind: "$author"
      },
      {
        $unwind: "$replyTo"
      },
      { $addFields: { count: countSize } }
    ],
    as: "children"
  }
};

class commentController {
  // 评论列表
  static async comment_query(ctx) {
    const {
      size = 10,
      page = 1,
      sort = "-createdAt",
      type,
      belong,
      content,
      status
    } = ctx.query;

    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
    const skip = (page - 1) * size;

    const commentQuery = {
      parent: null
    };
    content && (commentQuery.content = { $regex: content, $options: "$i" });
    status && (commentQuery.status = status);
    type && (commentQuery.type = type);
    belong && (commentQuery.belong = { $regex: belong, $options: "$i" });

    let arrLookup = [animateLookup, comicLookup, postLookup];

    const { user } = ctx.state;
    if (user.level < 100) {
      // commentQuery.status = "publish";
      arrLookup = [];
    }

    const data = await CommentModel.aggregate([
      { $match: commentQuery },
      {
        $addFields: {
          title: {
            type: "$type"
          }
        }
      },
      authorLookup,
      childrenLookup,
      ...arrLookup,
      ...relativeLookup,
      ...unwindList,
      { $addFields: { count: countSize } },
      {
        $project: {
          replyTo: 0,
          relative: 0
        }
      },
      {
        $sort: {
          [sortBy]: sortOrder
        }
      },
      { $skip: skip },
      { $limit: parseInt(size) }
    ]);
    const total = await CommentModel.countDocuments(commentQuery);
    ctx.send({ data, total });
  }

  // comment post
  static async comment_post(ctx) {
    const comment = ctx.request.body;
    const { user } = ctx.state;
    comment.author = user._id;
    const data = await CommentModel.create(comment).catch(err => {
      return { code: 404, msg: err.message };
    });

    await DataModel.create({ type: "commentSend" }).catch(err => err);
    ctx.send({ data });
  }

  // comment Get
  static async comment_get(ctx) {
    const { id } = ctx.params;
    const data = await CommentModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      authorLookup,
      replyToLookup,
      childrenLookup,
      ...unwindList
    ]).catch(err => err);
    ctx.send({ data });
  }

  static async comment_put(ctx) {
    const { id } = ctx.params;
    const sendData = ctx.request.body;
    const data = await CommentModel.updateOne(
      { _id: id },
      { $set: sendData }
    ).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  static async comment_delete(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;
    if (user.level < 100) {
      const single = await CommentModel.findOne({ _id: id, author: user._id });
      if (!single) return ctx.error({ msg: "没有权限", code: 402 });
    }
    const data = await CommentModel.deleteOne({ _id: id }).catch(err => {
      return { code: 404, msg: err.message };
    });
    if (!data.code) {
      await CommentModel.deleteMany({ parent: id });
    }
    ctx.send({ data });
  }

  static async comment_put_batch(ctx) {
    const { type, list, data } = ctx.request.body;
    const { belong, type: queryType } = ctx.query;
    const commentQuery = {};
    belong && (commentQuery.belong = belong);
    queryType && (commentQuery.type = queryType);

    if (type === "all") {
      const result = await CommentModel.update(
        commentQuery,
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    } else {
      const result = await CommentModel.update(
        { _id: { $in: list } },
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    }
  }

  // comment delete
  static async comment_delete_batch(ctx) {
    const { type, list } = ctx.request.body;
    const { belong, type: queryType } = ctx.query;
    const commentQuery = {};
    belong && (commentQuery.belong = belong);
    queryType && (commentQuery.type = queryType);

    if (type === "all") {
      const data = await CommentModel.remove(commentQuery).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data });
    } else {
      const data = await CommentModel.remove({ _id: { $in: list } }).catch(
        err => {
          return { code: 404, msg: err.message };
        }
      );
      ctx.send({ data });
    }
  }
}

module.exports = commentController;
