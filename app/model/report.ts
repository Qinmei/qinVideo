export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ReportSchema = new Schema(
    {
      author: Schema.Types.ObjectId, // 用户名
      content: { type: String, required: true }, // 内容
      image: [{ type: String }],
      target: Schema.Types.ObjectId, // 举报对象
      reply: String,
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

  return mongoose.model("Report", ReportSchema);
};
