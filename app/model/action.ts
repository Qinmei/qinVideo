module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const AnimateSchema = new Schema(
    {
      type: {
        // 类型
        type: String,
        required: true,
        index: true,
        enum: [
          "videoPlay",
          "videoLike",
          "comicPlay",
          "comicLike",
          "postPlay",
          "postLike",
          "commentLike",
          "commentUnlike",
          "userLike",
          "others"
        ],
        default: "others"
      },
      user: Schema.Types.ObjectId,
      target: Schema.Types.ObjectId, // 目标
      belong: Schema.Types.ObjectId, // 所属
      addons: Schema.Types.Mixed
    },
    {
      timestamps: true
    }
  );

  return mongoose.model("Animate", AnimateSchema);
};
