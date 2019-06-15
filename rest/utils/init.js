const { UserModel } = require("../models/index");
const mongoose = require("mongoose");
const stringRandom = require("string-random");

module.exports = async () => {
  const total = await UserModel.countDocuments();
  if (total === 0) {
    await UserModel.create({
      name: "qinvideo",
      password: "1f4981475a583e8f323dcb429b38264a",
      level: 100,
      email: "test@qinvideo.org",
      refreshToken: new mongoose.Types.ObjectId().toString() + stringRandom(16)
    });
  }
};
