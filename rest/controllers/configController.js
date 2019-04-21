const path = require("path");
const fs = require("fs");

const { ConfigModel, CategoryModel } = require("../models/index");

class configController {
  // config Get
  static async config_get(ctx) {
    const data = await ConfigModel.find();
    ctx.send({ data });
  }

  // config post
  static async config_post(ctx) {
    const data = ctx.request.body;
    await ConfigModel.remove({});
    const result = await ConfigModel.create(data).catch(err => {
      return { code: 404, msg: err.message };
    });

    if (!result.code) {
      const newConfig = await ConfigModel.findOne(
        {},
        {
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
          pcMenu: 1,
          pcIndex: 1,
          h5Menu: 1,
          h5Index: 1
        }
      );
      const category = await CategoryModel.find();
      const { pcMenu, h5Menu, pcIndex, h5Index } = newConfig;
      [pcMenu, h5Menu, pcIndex, h5Index].map(single =>
        single.map((item, key) => {
          if (!/new/.test(item)) {
            const categoryArr = JSON.parse(JSON.stringify(category)).filter(
              cate => cate._id === item
            );
            if (categoryArr.length > 0) {
              single[key] = categoryArr[0];
            }
          }
        })
      );
      ["pc", "h5"].map(item => {
        const config = path.join(__dirname, `../../public/${item}/config.js`);
        fs.writeFile(
          config,
          `window.config=${JSON.stringify(newConfig)}`,
          "utf8",
          function(err) {
            if (err) console.log(err);
          }
        );
      });
    }

    ctx.send({ data: result });
  }
}

module.exports = configController;
