const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const HigherSchema = new Schema(
  {
    token: {
      // 标题
      type: String,
      required: true
    },
    import: {
      total: Number,
      success: Number,
      error: Number,
      created: Number
    },
    update: {
      time: Number,
      total: Number,
      success: Number,
      created: Number
    },
    app: {
      name: String,
      logo: String,
      screen: String,
      website: String,
    },
    addons: Schema.Types.Mixed
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Higher", HigherSchema);
