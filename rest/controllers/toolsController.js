const request = require("request-promise");
const fs = require("fs");
const { AnimateModel, ComicModel, CategoryModel } = require("../models/index");

const url = "https://api.qinvideo.org/api/v2";

class toolController {
  //  消息通知
  static async message(ctx) {
    const query = ctx.request.query;
    const options = {
      method: "get",
      uri: url + "/message",
      qs: query,
      json: true
    };
    const result = await request(options);
    if (result.code === 10000) {
      ctx.send({ data: result.data });
    } else {
      ctx.send({ data: result });
    }
  }

  //  消息通知 详情
  static async info(ctx) {
    const { id } = ctx.params;
    const options = {
      method: "get",
      uri: url + "/message/" + id,
      json: true
    };
    const result = await request(options);
    if (result.code === 10000) {
      ctx.send({ data: result.data });
    } else {
      ctx.send({ data: result });
    }
  }

  // 工具-替换字符串
  static async replace(ctx) {
    const { type, before, after } = ctx.request.body;
    if (type === "cover") {
      AnimateModel.find({
        "cover.vertical": { $regex: before, $options: "i" }
      }).exec(function(err, docs) {
        docs.forEach(function(doc) {
          let vertical = doc.cover.vertical;
          let horizontal = doc.cover.horizontal;
          vertical = vertical.replace(before, after);
          horizontal = horizontal.replace(before, after);
          AnimateModel.updateOne(
            { _id: doc._id },
            {
              $set: {
                "cover.vertical": vertical,
                "cover.horizontal": horizontal
              }
            }
          ).catch(err => console.log(err));
        });
      });
    } else if (type === "play") {
      AnimateModel.find().exec(function(err, docs) {
        docs.forEach(function(doc) {
          if (doc.eposide && doc.eposide[0]) {
            const eposide = doc.eposide[0].list;
            const regx = new RegExp(before);
            const newEposide = eposide.map(item => {
              if (regx.test(item.link)) {
                item.link = item.link.replace(before, after);
              }
              return item;
            });
            const newData = doc.eposide;
            newData[0].list = newEposide;
            AnimateModel.updateOne(
              { _id: doc._id },
              { $set: { eposide: newData } }
            ).catch(err => console.log(err));
          }
        });
      });
    }

    ctx.success({ data: "开始更新" });
  }

  // 导入动漫
  static async uploadFile(ctx) {
    let result = [];
    const { file } = ctx.request.files;
    const { type } = ctx.request.body;

    async function saveFile(file) {
      if (file.type === "application/json") {
        const oldPath = file.path;
        console.log(oldPath);
        const data = JSON.parse(fs.readFileSync(oldPath));

        if (type === "animate") {
          for (const key in data) {
            const item = data[key];
            const eleData = await AnimateModel.create(item).catch(err => {
              return { code: 404, msg: item.slug };
            });
            result.push(eleData);
          }
        } else if (type === "comic") {
          for (const key in data) {
            const item = data[key];
            const eleData = await ComicModel.create(item).catch(err => {
              return { code: 404, msg: item.slug };
            });
            result.push(eleData);
          }
        }

        fs.exists(oldPath, () => {
          fs.unlinkSync(oldPath);
        });
      } else {
        return ctx.error({ code: 404, msg: "不支持的格式" });
      }
    }

    if (Array.isArray(file)) {
      for (const key in file) {
        const item = file[key];
        await saveFile(item);
      }
    } else {
      await saveFile(file);
    }

    ctx.success({ data: result });
  }

  // 导入动漫
  static async catTransfer(ctx) {
    const { type } = ctx.request.body;
    if (type === "year") {
      const total = await AnimateModel.countDocuments({});

      let result = {
        total,
        success: 0,
        fail: 0
      };

      const length = Math.ceil(total / 100);
      for (let index = 0; index < length; index++) {
        const element = await AnimateModel.find({})
          .limit(100)
          .skip(100 * index);
        for (let num = 0; num < element.length; num++) {
          const item = element[num];
          let itemCat = item.information.firstPlay;
          if (itemCat !== "20160606") {
            itemCat = itemCat.substr(0, 4);
            let newCat;
            const cate = await CategoryModel.find({ type: "year" });
            if (!cate.some(single => single.slug === itemCat)) {
              newCat = await CategoryModel.create({
                slug: itemCat,
                type: "year"
              });
            } else {
              newCat = await CategoryModel.findOne({
                slug: itemCat,
                type: "year"
              });
            }
            if (newCat.id) {
              item.category.year = newCat.id;
              const totalresult = await AnimateModel.updateOne(
                { slug: item.slug },
                { $set: item }
              ).catch(err => null);
              if (totalresult) {
                result.success++;
              } else {
                result.fail++;
              }
            }
          }
        }
      }
      ctx.success({ data: result });
    } else {
      return ctx.error({ code: 404, msg: "不支持的格式" });
    }
  }
}
module.exports = toolController;
