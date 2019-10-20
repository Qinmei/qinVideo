export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const HistorySchema = new mongoose.Schema(
    {
      target: {
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        trim: true
      },
      author: { type: Schema.Types.ObjectId },
      ip: String,
      referer: String,
      addons: Schema.Types.Mixed
    },
    {
      timestamps: true
    }
  );

  return mongoose.model("History", HistorySchema);
};
