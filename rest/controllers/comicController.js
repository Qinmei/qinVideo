const path = require("path");
const fs = require("fs");

const { getChildArray } = require("../utils/common");
const { ComicModel, CategoryModel, DataModel } = require("../models/index");

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

const categoryLookup = ["comic"].map(item => {
  return {
    $lookup: {
      from: "categories",
      let: { value: `$category.${item}` },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$_id", "$$value"]
            }
          }
        }
      ],
      as: `category.${item}`
    }
  };
});

const unwindList = ["$category.comic", "$author"].map(item => {
  return {
    $unwind: {
      path: item,
      preserveNullAndEmptyArrays: true
    }
  };
});

const relativeLookup = ["like", "unlike", "play", "comment"].map(item => {
  if (item === "like" || item === "unlike") {
    return {
      $lookup: {
        from: "users",
        let: { value: "$_id" },
        pipeline: [
          { $match: { $expr: { $in: ["$$value", `$comic.${item}`] } } }
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
                  { $eq: ["$type", "comic"] }
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
  play: { $size: "$relative.play" },
  comment: { $size: "$relative.comment" },
  update: { $size: "$eposide" }
};

class comicController {
  // comic
  static async comic_query(ctx) {
    const {
      size = 10,
      page = 1,
      sort = "-_id",
      title = null,
      comic = null,
      isUpdate = false,
      status = null
    } = ctx.query;

    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
    const skip = (page - 1) * size;

    const comicQuery = {};
    title && (comicQuery.title = { $regex: title, $options: "$i" });
    status && (comicQuery.status = status);
    isUpdate && (comicQuery["information.isUpdate"] = isUpdate === "true");
    if (comic) {
      const comicData = await CategoryModel.find({ type: "comic" });
      const comicList = getChildArray(comicData, comic);
      comicQuery["category.comic"] = { $in: comicList };
    }

    const { user } = ctx.state;
    user.level < 100 && (comicQuery.status = "publish");

    const data = await ComicModel.aggregate([
      { $match: comicQuery },
      authorLookup,
      ...categoryLookup,
      ...relativeLookup,
      ...unwindList,
      { $addFields: { count: countSize } },
      {
        $sort: {
          [sortBy]: sortOrder
        }
      },
      { $skip: skip },
      { $limit: parseInt(size) },
      {
        $project: {
          relative: 0,
          eposide: 0,
          play: { linkPrefix: 0 }
        }
      }
    ]);
    const total = await ComicModel.countDocuments(comicQuery);
    ctx.send({ data, total });
  }

  // comic post
  static async comic_post(ctx) {
    const { user } = ctx.state;
    const comic = ctx.request.body;
    comic.author = user._id;
    comic.stats && delete comic.status;
    const data = await ComicModel.create(comic).catch(err => {
      return { code: 404, msg: err.message };
    });

    await DataModel.create({ type: "comicSend" }).catch(err => err);
    ctx.send({ data });
  }

  // comic Get
  static async comic_get(ctx) {
    const { slug } = ctx.params;
    const { user } = ctx.state;
    let comicShow = {};
    if (user.level > 99) {
      comicShow = { _id: 0 };
    } else {
      const isAuthor = await ComicModel.findOne({ slug, author: user._id });
      comicShow = isAuthor
        ? { _id: 0 }
        : {
            _id: 0,
            eposide: 0,
            relative: 0,
            play: { linkPrefix: 0 }
          };
    }
    const data = await ComicModel.aggregate([
      { $match: { slug } },
      authorLookup,
      ...categoryLookup,
      ...relativeLookup,
      ...unwindList,
      {
        $addFields: {
          count: countSize,
          season: {
            $map: {
              input: "$eposide",
              as: "m",
              in: {
                title: "$$m.title"
              }
            }
          }
        }
      },
      { $project: comicShow }
    ]);
    ctx.send({ data });
  }

  // comic put
  static async comic_put(ctx) {
    const { slug } = ctx.params;
    const sendData = ctx.request.body;
    const { user } = ctx.state;
    if (user.level < 100) {
      const single = await ComicModel.findOne({ slug: slug, author: user._id });
      if (!single) return ctx.error({ msg: "没有权限", code: 402 });
      sendData.stats && delete sendData.status;
      sendData.slug && delete sendData.slug;
    }
    const data = await ComicModel.updateOne({ slug }, { $set: sendData }).catch(
      err => {
        return { code: 404, msg: err.message };
      }
    );
    ctx.send({ data });
  }

  // aniamte delete
  static async comic_delete(ctx) {
    const { slug } = ctx.params;
    const data = await ComicModel.deleteOne({ slug });
    ctx.send({ data });
  }

  static async comic_put_batch(ctx) {
    const { type, list, data } = ctx.request.body;
    if (type === "all") {
      const result = await ComicModel.update(
        {},
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    } else {
      const result = await ComicModel.update(
        { slug: { $in: list } },
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    }
  }

  static async comic_delete_batch(ctx) {
    const { type, list } = ctx.request.body;
    if (type === "all") {
      const data = await ComicModel.remove({});
      ctx.send({ data });
    } else {
      const data = await ComicModel.remove({ slug: { $in: list } });
      ctx.send({ data });
    }
  }

  // 漫画获取图片
  static async comic_play(ctx) {
    const { slug, eposide } = ctx.request.body;
    const { user } = ctx.state;
    const result = await ComicModel.findOne({
      slug,
      "play.level": { $lte: user.level }
    });
    if (!result) return ctx.error({ code: 402, msg: "权限不足" });

    const comicInfo = await ComicModel.aggregate([
      { $match: { slug } },
      authorLookup,
      ...categoryLookup,
      ...relativeLookup,
      ...unwindList,
      {
        $addFields: {
          count: countSize,
          season: {
            $map: {
              input: "$eposide",
              as: "m",
              in: {
                title: "$$m.title"
              }
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          eposide: 0,
          relative: 0,
          play: { linkPrefix: 0 }
        }
      }
    ]);

    const playInfo = result.eposide[parseInt(eposide)];
    const linkPrefix = result.play.linkPrefix;
    const playPath = linkPrefix + playInfo.list;
    const dirPath = path.join(__dirname, `../../public/comic${playPath}`);

    let data = [];
    if (fs.existsSync(dirPath)) {
      data = fs.readdirSync(dirPath).map(item => `/comic${playPath}/${item}`);

      await DataModel.create({
        type: "play",
        target: `${slug}E${eposide}`
      }).catch(err => err);
    }

    ctx.send({
      data: {
        ...comicInfo[0],
        playInfo: data
      }
    });
  }
}

module.exports = comicController;
