const { getChildArray, generateSecurePathHash } = require("../utils/common");

const {
  AnimateModel,
  CategoryModel,
  ConfigModel,
  DataModel
} = require("../models/index");

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

const categoryLookup = ["area", "year", "kind"].map(item => {
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

const unwindList = [
  "$category.area",
  "$category.year",
  "$category.kind",
  "$author",
  "$new"
].map(item => {
  return {
    $unwind: {
      path: item,
      preserveNullAndEmptyArrays: true
    }
  };
});

const relativeLookup = ["like", "unlike", "play", "comment", "danmu"].map(
  item => {
    if (item === "like" || item === "unlike") {
      return {
        $lookup: {
          from: "users",
          let: { value: "$_id" },
          pipeline: [
            { $match: { $expr: { $in: ["$$value", `$animate.${item}`] } } }
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
                    { $eq: ["$type", "animate"] }
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
    } else if (item === "danmu") {
      return {
        $lookup: {
          from: "danmus",
          let: { value: "$slug" },
          pipeline: [
            {
              $match: {
                $expr: { $gt: [{ $indexOfBytes: ["$player", "$$value"] }, -1] }
              }
            }
          ],
          as: `relative.${item}`
        }
      };
    }
  }
);

const countSize = {
  like: { $size: "$relative.like" },
  unlike: { $size: "$relative.unlike" },
  play: { $size: "$relative.play" },
  comment: { $size: "$relative.comment" },
  danmu: { $size: "$relative.danmu" },
  update: {
    $size: {
      $ifNull: ["$new.list", []]
    }
  }
};

class animateController {
  // animate列表
  static async animate_query(ctx) {
    const {
      size = 10,
      page = 1,
      sort = "-_id",
      title = null,
      area = null,
      kind = null,
      year = null,
      isUpdate = false,
      status = null
    } = ctx.query;

    const pattern = /^-/;
    const sortOrder = pattern.test(sort) ? -1 : 1;
    const sortBy = pattern.test(sort) ? sort.substring(1) : sort;
    const skip = (page - 1) * size;

    const animateQuery = {};
    title && (animateQuery.title = { $regex: title, $options: "$i" });
    status && (animateQuery.status = status);
    isUpdate && (animateQuery["information.isUpdate"] = isUpdate === "true");

    if (area) {
      const areaData = await CategoryModel.find({ type: "area" });
      const areaList = getChildArray(areaData, area);
      animateQuery["category.area"] = { $in: areaList };
    }
    if (kind) {
      const kindData = await CategoryModel.find({ type: "kind" });
      const kindList = getChildArray(kindData, kind);
      animateQuery["category.kind"] = { $in: kindList };
    }
    if (year) {
      const yearData = await CategoryModel.find({ type: "year" });
      const yearList = getChildArray(yearData, year);
      animateQuery["category.year"] = { $in: yearList };
    }

    const { user } = ctx.state;
    user.level < 100 && (animateQuery.status = "publish");

    const data = await AnimateModel.aggregate([
      { $match: animateQuery },
      {
        $addFields: {
          new: {
            $slice: ["$eposide", -1, 1]
          }
        }
      },
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
          new: 0,
          play: { linkPrefix: 0 }
        }
      }
    ]);

    const total = await AnimateModel.countDocuments(animateQuery);
    ctx.send({ data, total });
  }

  // animate post
  static async animate_post(ctx) {
    const { user } = ctx.state;
    const animate = ctx.request.body;
    animate.author = user._id;
    animate.stats && delete animate.status;
    const data = await AnimateModel.create(animate).catch(err => {
      return { code: 404, msg: err.message };
    });
    await DataModel.create({ type: "animateSend" });
    ctx.send({ data });
  }

  // animate Get
  static async animate_get(ctx) {
    const { slug } = ctx.params;
    const { user } = ctx.state;
    let animateShow = {};
    if (user.level > 99) {
      animateShow = { _id: 0, relative: 0 };
    } else {
      const isAuthor = await AnimateModel.findOne({ slug, author: user._id });
      animateShow = isAuthor
        ? { _id: 0, relative: 0 }
        : {
            _id: 0,
            eposide: 0,
            relative: 0,
            play: { linkPrefix: 0 }
          };
    }
    const data = await AnimateModel.aggregate([
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
                season: "$$m.season",
                list: {
                  $map: {
                    input: "$$m.list",
                    as: "single",
                    in: {
                      title: "$$single.title"
                    }
                  }
                }
              }
            }
          }
        }
      },
      { $project: animateShow }
    ]);
    ctx.send({ data });
  }

  // animate put
  static async animate_put(ctx) {
    const { slug } = ctx.params;
    const sendData = ctx.request.body;
    const { user } = ctx.state;
    if (user.level < 100) {
      const single = await AnimateModel.findOne({
        slug: slug,
        author: user._id
      });
      if (!single) return ctx.error({ msg: "没有权限", code: 402 });
      sendData.stats && delete sendData.status;
      sendData.slug && delete sendData.slug;
      !sendData.play.linkPrefix && (sendData.play.linkPrefix = "");
    }
    const data = await AnimateModel.updateOne(
      { slug },
      { $set: sendData }
    ).catch(err => {
      return { code: 404, msg: err.message };
    });
    ctx.send({ data });
  }

  // aniamte delete
  static async animate_delete(ctx) {
    const { slug } = ctx.params;
    const data = await AnimateModel.deleteOne({ slug });
    ctx.send({ data });
  }

  static async animate_put_batch(ctx) {
    const { type, list, data } = ctx.request.body;
    if (type === "all") {
      const result = await AnimateModel.update(
        {},
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    } else {
      const result = await AnimateModel.update(
        { slug: { $in: list } },
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
      ctx.send({ data: result });
    }
  }

  static async animate_delete_batch(ctx) {
    const { type, list } = ctx.request.body;
    if (type === "all") {
      const data = await AnimateModel.remove({});
      ctx.send({ data });
    } else {
      const data = await AnimateModel.remove({ slug: { $in: list } });
      ctx.send({ data });
    }
  }

  // 动漫播放

  static async animate_play(ctx) {
    const { slug, season, eposide } = ctx.request.body;
    const { user } = ctx.state;

    const result = await AnimateModel.findOne({
      slug,
      "play.level": { $lte: user.level }
    });
    if (!result) return ctx.error({ code: 402, msg: "权限不足" });
    const data = await AnimateModel.aggregate([
      { $match: { slug, "play.level": { $lte: user.level } } },
      ...["play", "comment", "danmu"].map(item => {
        if (item === "comment") {
          return {
            $lookup: {
              from: "comments",
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ["$belong", `${slug}S${season}E${eposide}`] },
                        { $eq: ["$type", "animate"] }
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
              pipeline: [
                {
                  $match: {
                    $expr: { $eq: ["$belong", `${slug}S${season}E${eposide}`] }
                  }
                }
              ],
              as: `relative.${item}`
            }
          };
        } else if (item === "danmu") {
          return {
            $lookup: {
              from: "danmus",
              pipeline: [
                {
                  $match: {
                    $expr: { $eq: ["$belong", `${slug}S${season}E${eposide}`] }
                  }
                }
              ],
              as: `relative.${item}`
            }
          };
        }
      }),

      {
        $addFields: {
          count: {
            play: { $size: "$relative.play" },
            comment: { $size: "$relative.comment" },
            danmu: { $size: "$relative.danmu" }
          },
          season: {
            $map: {
              input: "$eposide",
              as: "m",
              in: {
                season: season,
                eposide: eposide,
                list: {
                  $map: {
                    input: "$$m.list",
                    as: "single",
                    in: {
                      title: "$$single.title"
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        $project: {
          playInfo: { $arrayElemAt: ["$eposide", parseInt(season)] },
          count: 1,
          title: 1,
          slug: 1,
          information: 1,
          season: { $arrayElemAt: ["$season", parseInt(season)] },
          cover: 1,
          play: {
            kind: 1,
            level: 1,
            linkPrefix: 1
          }
        }
      },
      {
        $project: {
          playInfo: { $arrayElemAt: ["$playInfo.list", parseInt(eposide)] },
          count: 1,
          title: 1,
          slug: 1,
          information: 1,
          season: 1,
          cover: 1,
          play: 1
        }
      }
    ]);

    const config = await ConfigModel.findOne({});
    const animate = data[0];
    let playLink;
    const animatePrefix = animate.play.linkPrefix || "";
    if (config) {
      if (animate.play.kind === "mp4" || animate.play.kind === "m3u8") {
        const configPrefix = config.playLimit
          .filter(item => item.level <= animate.play.level)
          .sort((a, b) => b.level - a.level)[0];
        if (configPrefix) {
          const { prefix, key, expired } = configPrefix;
          const uri = animatePrefix + animate.playInfo.link;
          playLink = prefix + generateSecurePathHash(uri, expired, key);
        } else {
          playLink = animatePrefix + animate.playInfo.link;
        }
      } else {
        const configPrefix = config.jiexi.filter(item => {
          const pattern = new RegExp(item.pattern);
          return pattern.test(animate.playInfo.link);
        })[0];
        if (configPrefix) {
          playLink =
            configPrefix.prefix + animatePrefix + animate.playInfo.link;
        }
      }
    }
    animate.playInfo.link = playLink;

    await DataModel.create({
      type: "play",
      target: `${slug}S${season}E${eposide}`
    }).catch(err => err);
    ctx.send({ data: animate });
  }
}

module.exports = animateController;
