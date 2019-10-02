const { ReportModel } = require("../models/index");

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

const animateLookup = {
  $lookup: {
    from: "animates",
    let: { value: "$target" },
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
    let: { value: "$target" },
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
          title: 1,
          slug: 1,
          status: 1
        }
      }
    ],
    as: "title.post"
  }
};

const commentLookup = {
  $lookup: {
    from: "comments",
    let: { value: "$target" },
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
          type: 1,
          image: 1,
          status: 1,
          belong: 1,
          parent: 1,
          content: 1,
          video: 1
        }
      }
    ],
    as: "title.comment"
  }
};

const unwindList = [
  "$author",
  "$title",
  "$title.animate",
  "$title.post",
  "$title.comment"
].map(item => {
  return {
    $unwind: {
      path: item,
      preserveNullAndEmptyArrays: true
    }
  };
});

class reportController {
  // 评论列表
  static async report_query(ctx) {
    const {
      size = 10,
      page = 1,
      sort = "-createdAt",
      type,
      content,
      status
    } = ctx.query;

    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
    const skip = (page - 1) * size;

    const reportQuery = {};
    content && (reportQuery.content = { $regex: content, $options: "$i" });
    status && (reportQuery.status = status);
    type && (reportQuery.type = type);

    const data = await ReportModel.aggregate([
      { $match: reportQuery },
      {
        $addFields: {
          title: {
            type: "$type"
          }
        }
      },
      authorLookup,
      animateLookup,
      postLookup,
      commentLookup,
      ...unwindList,
      {
        $sort: {
          [sortBy]: sortOrder
        }
      },
      { $skip: skip },
      { $limit: parseInt(size) }
    ]);
    const total = await ReportModel.countDocuments(reportQuery);
    ctx.send({ data, total });
  }

  // report post
  static async report_post(ctx) {
    const report = ctx.request.body;
    const { user } = ctx.state;
    report.author = user._id;
    const data = await ReportModel.create(report).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  static async report_put(ctx) {
    const { id } = ctx.params;
    const sendData = ctx.request.body;
    const { user } = ctx.state;
    if (user.level < 100) {
      const single = await ReportModel.findOne({ _id: id, author: user._id });
      if (!single) return ctx.error({ msg: "没有权限", code: 402 });
    }
    const data = await ReportModel.updateOne(
      { _id: id },
      { $set: sendData }
    ).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  static async report_delete(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;
    if (user.level < 100) {
      const single = await ReportModel.findOne({ _id: id, author: user._id });
      if (!single) return ctx.error({ msg: "没有权限", code: 402 });
    }
    const data = await ReportModel.deleteOne({ _id: id }).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  static async report_put_batch(ctx) {
    const { type, list, data } = ctx.request.body;

    if (type === "all") {
      const result = await ReportModel.update(
        {},
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    } else {
      const result = await ReportModel.update(
        { _id: { $in: list } },
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    }
  }

  // report delete
  static async report_delete_batch(ctx) {
    const { type, list } = ctx.request.body;

    if (type === "all") {
      const data = await ReportModel.remove({}).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data });
    } else {
      const data = await ReportModel.remove({ _id: { $in: list } }).catch(
        err => {
          return { code: 404, msg: err.message };
        }
      );
      ctx.send({ data });
    }
  }
}

module.exports = reportController;
