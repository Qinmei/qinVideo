'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema(
    {
      token: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true,
      }, //
      host: { type: String, required: true, unique: true },
      web: [{ type: String }], // 可以获取网站
      level: { type: Number, default: 1 }, // 等级
      expired: { type: Number, default: 0 }, // 会员过期时间,
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model('User', UserSchema);
};
