const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
  favcion: { type: String, default: "" }, // ico
  name: { type: String, default: "" }, // 网站名
  slogan: { type: String, default: "" }, // 标语
  information: { type: String, default: "" }, // 简介
  color: { type: String, default: "" }, // 主题色
  qq: { type: String, default: "" }, // qq群链接
  email: { type: String, default: "" }, // 邮箱
  app: { type: String, default: "" }, // app
  logo: { type: String, default: "" }, // 网站logo
  headimg: { type: String, default: "" }, // 首页头图
  mobleimg: { type: String, default: "" }, // 手机头图
  loginimg: { type: String, default: "" }, // 登陆大图
  avatar: { type: String, default: "" }, // 默认头像图
  background: { type: String, default: "" }, // 默认背景图
  newAnimate: { type: String, default: "" }, // 新番
  newComic: { type: String, default: "" }, // 新漫
  newDiscuss: { type: String, default: "" }, // 讨论区
  newShop: { type: String, default: "" }, // 商品
  allAnimate: { type: String, default: "" }, // 所有番剧
  allComic: { type: String, default: "" }, // 所有漫画
  allPost: { type: String, default: "" }, // 所有文章
  pcMenu: [{ type: String }], // web菜单
  pcIndex: [{ type: String }], // web首页
  h5Menu: [{ type: String }], // mobile菜单
  h5Index: [{ type: String }], // mobile首页
  postMenu: [{ type: String }], //动态文章分类置顶
  postTop: [{ type: String }], // 动态文章置顶
  message: [{ type: String }], // 系统通知
  aboutus: { type: String, default: "" },
  playLimit: [
    {
      // 播放限制
      level: Number,
      prefix: String,
      key: String,
      expired: Number
    }
  ],
  jiexi: [
    {
      // 解析
      pattern: String,
      prefix: String
    }
  ],
  emailSetting: {
    // 邮件方式
    type: {
      type: String,
      enum: ["smtp", "sendgrid"],
      default: "smtp"
    },
    name: { type: String, default: "" },
    sender: { type: String, default: "" }
  },
  smtp: {
    // 邮箱
    host: { type: String, default: "" },
    port: { type: Number, default: 465 },
    secure: { type: String, default: "" },
    user: { type: String, default: "" },
    pass: { type: String, default: "" }
  },
  sendgrid: {
    // sendgird
    key: { type: String, default: "" }
  },
  addons: Schema.Types.Mixed
});

module.exports = mongoose.model("Config", ConfigSchema);
