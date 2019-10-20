export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CommentSchema = new Schema(
    {
      author: Schema.Types.ObjectId, // 用户名
      target: Schema.Types.ObjectId,
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

  return mongoose.model("Comment", CommentSchema);
};
