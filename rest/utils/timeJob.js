const schedule = require('node-schedule');

const {
    UserModel,
  } = require('../models/index');

let rule = new schedule.RecurrenceRule();
rule.minute = [0,15,30,45];

module.exports = ()=> {
    schedule.scheduleJob(rule, async () => {
        await UserModel.update({expired: { $gte: 900 },level:{$lte:99}}, {$inc: {expired: -900}});
        await UserModel.update({expired: { $lt: 900 },level:{$lte:99}}, {$set:{expired: Number(0),level:Number(1)}});
    })
};

