const path = require("path");
const fs = require("fs");

const { ConfigModel } = require("../models/index");

const show = {
  name: 1,
  slogan: 1,
  information: 1,
  color: 1,
  qq: 1,
  email: 1,
  app: 1,
  headimg: 1,
  mobleimg: 1,
  loginimg: 1,
  avatar: 1,
  background: 1,
  menu: 1,
  postCat: 1
};
class configController {
  // config Get
  static async config_get(ctx) {
    const { user } = ctx.state;
    if (user.level > 99) {
      const data = await ConfigModel.find();
      ctx.send({ data });
    } else {
      const data = await ConfigModel.find({}, show);
      ctx.send({ data });
    }
  }

  // config post
  static async config_post(ctx) {
    const data = ctx.request.body;
    await ConfigModel.remove({});
    const result = await ConfigModel.create(data).catch(err => {
      return { code: 404, msg: err.message };
    });
    ["pc", "h5"].map(item => {
      const config = path.join(__dirname, `../../public/${item}/config.js`);
      fs.writeFile(
        config,
        `window.config=${JSON.stringify(data)}`,
        "utf8",
        function(err) {
          if (err) console.log(err);
        }
      );
    });
    ctx.send({ data: result });
  }
}

module.exports = configController;
