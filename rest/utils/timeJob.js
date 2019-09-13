const schedule = require('node-schedule');

const {
    UserModel,
    HigherModel
} = require('../models/index');
const { higherController } = require("../controllers");

let rule = new schedule.RecurrenceRule();
rule.minute = [0, 15, 30, 45];

let rule2 = new schedule.RecurrenceRule();
rule2.hour = [8, 20];

module.exports = () => {
    schedule.scheduleJob(rule, async () => {
        await UserModel.update({ expired: { $gte: 900 }, level: { $lte: 99 } }, { $inc: { expired: -900 } });
        await UserModel.update({ expired: { $lt: 900 }, level: { $lte: 99 } }, { $set: { expired: Number(0), level: Number(1) } });
    })

    schedule.scheduleJob(rule2, async () => {
        const data = await HigherModel.findOne();
        if (data && data.update && data.update.use) {
            await higherController.update();
        }
    })
};

