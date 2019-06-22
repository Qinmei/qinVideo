const { UserModel, ConfigModel } = require("../models/index");
const mongoose = require("mongoose");
const stringRandom = require("string-random");
const { MD5 } = require("./common");
const configInit = require("../../config");

module.exports = async () => {
  const total = await UserModel.countDocuments();
  if (total === 0) {
    await UserModel.create({
      name: "qinvideo",
      password: MD5(configInit.salt + "e10adc3949ba59abbe56e057f20f883e"),
      level: 100,
      email: "test@qinvideo.org",
      refreshToken: new mongoose.Types.ObjectId().toString() + stringRandom(16)
    });
  }

  const config = await ConfigModel.findOne();
  if (!config) {
    await ConfigModel.create({});
  }
};
