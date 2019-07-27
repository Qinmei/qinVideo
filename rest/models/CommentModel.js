const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    author: Schema.Types.ObjectId, // 用户名
    belong: { type: String, required: true }, // 归属
    target: { type: String, required: true }, // 确认标识
    type: {
      type: String,
      enum: ["animate", "post", "comic", "discuss"],
      default: "discuss"
    },
    replyTo: Schema.Types.ObjectId, // 回复人
    parent: Schema.Types.ObjectId, // 父级
    content: { type: String, required: true }, // 内容
    image: [{ type: String }], // 图片
    video: String, // 视频
    status: {
      type: String,
      enum: ["draft", "publish", "reject"],
      default: "draft"
    },
    addons: Schema.Types.Mixed
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
