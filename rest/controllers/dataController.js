const {
  DataModel,
  AnimateModel,
  PostModel,
  CommentModel,
  ComicModel
} = require("../models/index");

class dataController {
  // 统计
  static async data_query(ctx) {
    const {
      target,
      kind = "normal",
      startTime = "2018-06-24",
      endTime = "2019-08-08"
    } = ctx.query;

    if (kind === "normal") {
      const dataQuery = {
        createdAt: {
          $gte: new Date(startTime),
          $lte: new Date(endTime)
        }
      };

      target && (dataQuery.target = { $regex: target, $options: "$i" });

      const data = await DataModel.aggregate([
        {
          $match: dataQuery
        },
        {
          $project: {
            day: { $substr: [{ $add: ["$createdAt", 28800000] }, 0, 10] },
            target: 1,
            type: 1
          }
        },
        {
          $group: {
            _id: {
              date: "$day",
              type: "$type"
            },
            count: { $sum: 1 }
          }
        },
        {
          $group: {
            _id: "$_id.date",
            data: {
              $push: {
                type: "$_id.type",
                count: "$count"
              }
            }
          }
        },
        {
          $sort: { _id: 1 }
        }
      ]);

      ctx.send({ data });
    } else if (kind === "search") {
      const data = await DataModel.aggregate([
        {
          $match: {
            type: "search",
            createdAt: {
              $gte: new Date(startTime),
              $lte: new Date(endTime)
            }
          }
        },
        {
          $group: {
            _id: "$target",
            count: { $sum: 1 }
          }
        }
      ]);

      ctx.send({ data });
    } else if (kind === "today") {
      const data = await DataModel.aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(startTime),
              $lte: new Date(endTime)
            }
          }
        },
        {
          $project: {
            hour: { $substr: [{ $add: ["$createdAt", 28800000] }, 0, 13] },
            type: 1
          }
        },
        {
          $group: {
            _id: {
              date: "$hour",
              type: "$type"
            },
            count: { $sum: 1 }
          }
        },
        {
          $group: {
            _id: "$_id.date",
            data: {
              $push: {
                type: "$_id.type",
                count: "$count"
              }
            }
          }
        },
        {
          $sort: { _id: 1 }
        }
      ]);

      ctx.send({ data });
    } else if (kind === "activeVideo") {
      const data = await DataModel.aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(startTime),
              $lte: new Date(endTime)
            },
            target: {
              $ne: null
            }
          }
        },
        {
          $group: {
            _id: "$target",
            count: { $sum: 1 }
          }
        },
        {
          $sort: { count: -1 }
        },
        { $limit: 10 }
      ]);

      ctx.send({ data });
    } else if (kind === "allData") {
      const animateAll = await AnimateModel.countDocuments();
      const animateDraft = await AnimateModel.countDocuments({
        status: "draft"
      });

      const postAll = await PostModel.countDocuments();
      const postDraft = await PostModel.countDocuments({ status: "draft" });

      const commentAll = await CommentModel.countDocuments();
      const commentDraft = await CommentModel.countDocuments({
        status: "draft"
      });

      const comicAll = await ComicModel.countDocuments();
      const comicDraft = await ComicModel.countDocuments({ status: "draft" });

      const data = {
        animateAll,
        animateDraft,
        postAll,
        postDraft,
        commentAll,
        commentDraft,
        comicAll,
        comicDraft
      };

      ctx.send({ data });
    }
  }

  // data post
  static async data_post(ctx) {
    const data = ctx.request.body;
    const result = await DataModel.create(data)
      .catch(err => {
        return { code: 404, msg: err.message };
      })
      .catch(err => err);
    ctx.send({ data: result });
  }
}

module.exports = dataController;
