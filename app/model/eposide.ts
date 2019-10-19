module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const EposideSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
        index: true
      },
      cover: {
        type: String
      },
      belong: {
        type: Schema.Types.ObjectId
      },
      link: {
        type: String
      },
      bilibili: {
        type: String
      },
      addons: Schema.Types.Mixed
    },
    {
      timestamps: true
    }
  );

  return mongoose.model("Eposide", EposideSchema);
};
