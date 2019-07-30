const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const AnimateSchema = new Schema(
  {
    title: {
      // 标题
      type: String,
      required: true
    },
    slug: {
      // 别名, 唯一标识符
      type: String,
      required: true,
      index: true,
      unique: true,
      trim: true
    },
    author: Schema.Types.ObjectId,
    status: {
      type: String,
      enum: ["draft", "publish", "reject"],
      default: "draft"
    },
    information: {
      // 动漫详情
      introduce: { type: String, default: "" }, // 简介
      staff: { type: String, default: "" }, // 工作人员
      actor: { type: String, default: "" }, // 声优
      firstPlay: { type: String, default: "20160606" }, // 首播
      isUpdate: { type: Boolean, default: false }, // 是否连载
      updateDay: { type: Number, default: 0 }, // 周几播放
      rateStar: { type: Number, default: 8 }, // 评分星级
      rateCount: { type: Number, default: 1000 }, // 评分人数
      impression: { type: String, default: "" }, // 印象
      eposideCount: { type: Number, default: 0 } // 总集数
    },
    play: {
      kind: {
        type: String,
        enum: ["mp4", "m3u8", "php"],
        default: "mp4"
      }, // 播放类型
      level: { type: Number, default: 0 }, // 等级限定
      linkPrefix: { type: String, default: "" }, // 链接前缀
      downTitle: { type: String, default: "" }, // 下载标题
      downLink: { type: String, default: "" } // 下载链接
    },
    eposide: [
      {
        // 剧集信息
        season: String, // 季数
        list: [
          {
            title: String, // 标题
            link: String, // 链接
            danmu: String // 弹幕ID
          }
        ]
      }
    ],
    cover: {
      vertical: { type: String, default: "" }, // 竖向大图
      horizontal: { type: String, default: "" } // 横向大图
    },
    category: {
      area: Schema.Types.ObjectId, // 地区
      kind: Schema.Types.ObjectId, // 类型
      year: Schema.Types.ObjectId, // 年份
      tag: [{ type: String }] // 标签
    },
    addons: Schema.Types.Mixed
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Animate", AnimateSchema);
