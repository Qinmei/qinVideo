export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const PostSchema = new Schema(
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
      status: {
        type: String,
        enum: ["draft", "publish", "trash"],
        default: "draft"
      },
      level: { type: Number, default: 0 }, // 等级限定
      author: Schema.Types.ObjectId, // 用户名
      category: {
        post: [{ type: Schema.Types.ObjectId }], // 分类
        tag: [{ type: Schema.Types.ObjectId }] // 标签
      },
      cover: { type: String, default: "" }, // 封面图
      content: { type: String, default: "" }, // 内容
      introduce: { type: String, default: "" },
      addons: Schema.Types.Mixed
    },
    {
      timestamps: true
    }
  );

  return mongoose.model("Post", PostSchema);
};
