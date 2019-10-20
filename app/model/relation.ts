export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const RelationSchema = new Schema(
    {
      user: Schema.Types.ObjectId,
      target: Schema.Types.ObjectId, // 目标
      belong: Schema.Types.ObjectId, // 所属
      addons: Schema.Types.Mixed
    },
    {
      timestamps: true
    }
  );

  return mongoose.model("Relation", RelationSchema);
};
