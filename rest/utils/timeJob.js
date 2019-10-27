const schedule = require("node-schedule");

const { UserModel, HigherModel } = require("../models/index");
const { higherController } = require("../controllers");

module.exports = () => {
  schedule.scheduleJob("0 */15 * * * *", async () => {
    await UserModel.update(
      { expired: { $gte: 900 }, level: { $lte: 99 } },
      { $inc: { expired: -900 } }
    );
    await UserModel.update(
      { expired: { $lt: 900 }, level: { $lte: 99 } },
      { $set: { expired: Number(0), level: Number(1) } }
    );
  });

  schedule.scheduleJob("0 0 3 * * *", async () => {
    const data = await HigherModel.findOne();
    if (data && data.update && data.update.use) {
      await higherController.update();
    }
  });
};
