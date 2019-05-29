const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true
    }, // 用户名
    password: { type: String, required: true }, // 密码
    refreshToken: { type: String, required: true }, // refresh token
    email: { type: String, required: true, unique: true }, // 邮箱
    level: { type: Number, default: 1 }, // 等级
    score: { type: Number, default: 0 }, // 积分
    avatar: { type: String }, // 头像
    background: { type: String }, // 背景图
    introduce: { type: String }, // 简介
    status: {
      type: String,
      enum: ["inactive", "active", "unused"],
      default: "inactive"
    },
    money: { type: Number, default: 0 }, // 金钱
    expired: { type: Number, default: 0 }, // 会员过期时间
    post: {
      // 文章
      like: [{ type: Schema.Types.ObjectId }],
      unlike: [{ type: Schema.Types.ObjectId }],
      history: [{ type: Schema.Types.ObjectId }]
    },
    animate: {
      // 动漫
      like: [{ type: Schema.Types.ObjectId }],
      unlike: [{ type: Schema.Types.ObjectId }],
      history: [{ type: Schema.Types.ObjectId }]
    },
    comic: {
      // 漫画
      like: [{ type: Schema.Types.ObjectId }],
      unlike: [{ type: Schema.Types.ObjectId }],
      history: [{ type: Schema.Types.ObjectId }]
    },
    comment: {
      // 评论
      like: [{ type: Schema.Types.ObjectId }],
      unlike: [{ type: Schema.Types.ObjectId }]
    },
    addons: Schema.Types.Mixed
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
