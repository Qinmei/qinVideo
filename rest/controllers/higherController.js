const {
  HigherModel,
} = require("../models/index");

class higherController {
  // higher Get
  static async higher_get(ctx) {
    let data = await HigherModel.find();
    ctx.send({ data });
  }

  // higher post
  static async higher_post(ctx) {
    const data = ctx.request.body;
    const exist = await HigherModel.findOne();
    let result;
    if (exist) {
      result = await HigherModel.update({},
        { $set: data },
        { multi: true }).catch(err => {
          return { code: 404, msg: err.message };
        });
    } else {
      result = await HigherModel.create(data).catch(err => {
        return { code: 404, msg: err.message };
      });
    }

    ctx.send({ data: result });
  }
}
module.exports = higherController;
