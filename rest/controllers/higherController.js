const request = require("request-promise");
const { HigherModel, AnimateModel } = require("../models/index");
const { sleep } = require("../utils/common");

const url = "https://api.qinvideo.org/api/v2";

class higherController {
  // higher Get
  static async get(ctx) {
    let data = await HigherModel.find();
    ctx.send({ data });
  }

  // higher post
  static async post(ctx) {
    const data = ctx.request.body;
    const exist = await HigherModel.findOne();
    let result;
    if (exist) {
      result = await HigherModel.update(
        {},
        { $set: data },
        { multi: true }
      ).catch(err => {
        return { code: 404, msg: err.message };
      });
    } else {
      result = await HigherModel.create(data).catch(err => {
        return { code: 404, msg: err.message };
      });
    }

    ctx.send({ data: result });
  }

  // higher auth
  static async auth(ctx) {
    const data = ctx.request.body;
    const { token } = data;
    const options = {
      method: "get",
      uri: url + "/auth",
      headers: {
        token
      },
      json: true
    };
    const result = await request(options);
    if (result.code === 10000) {
      ctx.send({ data: result.data });
    } else {
      ctx.send({ data: result });
    }
  }

  // higher query
  static async query(ctx) {
    const exist = async data => {
      const slug = data.slug;
      const result = await AnimateModel.findOne({ slug });
      return result;
    };

    const query = ctx.request.query;
    const data = await HigherModel.findOne();
    if (data) {
      const options = {
        method: "get",
        uri: url + "/animate",
        qs: query,
        headers: {
          token: data.token
        },
        json: true
      };
      const result = await request(options);
      if (result.code === 10000) {
        const newList = result.data.list;
        for (let i = 0; i < newList.length; i++) {
          const isExist = await exist(newList[i]);
          newList[i].exist = !!isExist;
        }
        ctx.send({ data: result.data });
      } else {
        ctx.send({ data: result });
      }
    } else {
      ctx.send({
        code: 404,
        msg: "需要KEY"
      });
    }
  }

  // higher list
  static async list(ctx) {
    const save = async data => {
      const slug = data.slug;
      delete data._id;
      delete data.category.year;
      delete data.category.area;
      delete data.category.kind;
      data.play.level = 0;
      let result = true;
      await AnimateModel.findOneAndUpdate(
        { slug },
        { $set: data },
        { upsert: true }
      ).catch(err => (result = false));
      return result;
    };

    const data = await HigherModel.findOne();
    if (data) {
      const { list } = ctx.request.body;
      const options = {
        method: "post",
        uri: url + "/animate",
        body: {
          list
        },
        headers: {
          token: data.token
        },
        json: true
      };
      const result = await request(options);
      if (result.code === 10000) {
        const animate = result.data;
        let getData = [];
        for (let i = 0; i < animate.length; i++) {
          const saveData = await save(animate[i]);
          saveData && getData.push(i);
        }

        if (getData.length === animate.length) {
          ctx.success({ msg: "导入成功" });
        } else if (getData.length > 0) {
          ctx.success({ msg: "部分导入成功" });
        } else {
          ctx.error({
            msg: "导入失败"
          });
        }
      } else {
        ctx.send({ data: result });
      }
    } else {
      ctx.send({
        code: 404,
        msg: "需要KEY"
      });
    }
  }

  static async import(ctx) {
    const { source, start, end } = ctx.request.body;
    const data = await HigherModel.findOne();
    if (!data) {
      ctx.send({
        code: 404,
        msg: "需要KEY"
      });
    }

    const save = async data => {
      const slug = data.slug;
      delete data._id;
      delete data.category.year;
      delete data.category.area;
      delete data.category.kind;
      data.play.level = 0;
      let result = true;
      await AnimateModel.findOneAndUpdate(
        { slug },
        { $set: data },
        { upsert: true }
      ).catch(err => (result = false));
      return result;
    };

    let newStart = Number(start);
    let newEnd = Number(end);

    const total = (newEnd - newStart + 1) * 10;

    const options = {
      method: "get",
      uri: url + "/auth",
      body: {},
      headers: {
        token: data.token
      },
      json: true
    };
    const auth = await request(options);

    if (auth.code === 10000) {
      ctx.success({ msg: "开始导入" });
    } else {
      ctx.send({ data: auth });
      return;
    }
    console.log("开始导入");

    await HigherModel.findOneAndUpdate(
      {},
      {
        $set: {
          import: {
            total,
            success: 0,
            error: 0,
            created: new Date()
          }
        }
      }
    );

    for (let i = newStart; i < newEnd + 1; i++) {
      const options = {
        method: "get",
        uri: url + "/animate",
        qs: {
          page: i,
          size: 10,
          source
        },
        headers: {
          token: data.token
        },
        json: true
      };
      let animate = await request(options);
      let allList = [];
      if (animate.code === 10000) allList = animate.data.list;
      allList = allList.map(item => item.slug);

      const options2 = {
        method: "post",
        uri: url + "/animate",
        body: {
          list: allList
        },
        headers: {
          token: data.token
        },
        json: true
      };
      const result = await request(options2);
      if (result.code !== 10000) return;
      animate = result.data;

      for (let index = 0; index < animate.length; index++) {
        const temp = await HigherModel.findOne();
        const element = animate[index];
        const result = await save(element);
        let importData = {};
        if (result) {
          importData = {
            total,
            success: (temp.import.success || 0) + 1,
            error: temp.import.error || 0,
            created: new Date()
          };
        } else {
          importData = {
            total,
            success: temp.import.success || 0,
            error: (temp.import.error || 0) + 1,
            created: new Date()
          };
        }

        await HigherModel.findOneAndUpdate(
          {},
          { $set: { import: importData } }
        );
        await sleep();
      }
    }
  }

  static async eposide(ctx) {
    const { slug } = ctx.request.body;
    const data = await HigherModel.findOne();
    if (!data) {
      ctx.send({
        code: 404,
        msg: "需要KEY"
      });
    }

    const options = {
      method: "get",
      uri: url + "/auth",
      body: {},
      headers: {
        token: data.token
      },
      json: true
    };
    const auth = await request(options);

    if (auth.code !== 10000) return;

    const remoteData = await request({
      method: "post",
      uri: url + "/animate",
      body: {
        list: [slug]
      },
      headers: {
        token: data.token
      },
      json: true
    });

    let result;
    if (remoteData.code !== 10000 || remoteData.data.length === 0) {
      result = false;
    } else {
      result = remoteData.data[0].eposide;
    }

    if (result) {
      ctx.success({
        data: result
      });
    } else {
      ctx.error({
        code: 404,
        msg: "获取错误"
      });
    }
  }

  static async update(ctx) {
    const data = await HigherModel.findOne();
    if (!data) {
      ctx.send({
        code: 404,
        msg: "需要KEY"
      });
    }

    const configData = data;

    const save = async data => {
      const slug = data.slug;
      delete data._id;
      delete data.category.year;
      delete data.category.area;
      delete data.category.kind;
      if (configData.update.eposide) {
        delete data.information;
        delete data.play;
        delete data.cover;
        delete data.category;
        delete data.slug;
        delete data.status;
        delete data.author;
      }
      let result = true;
      await AnimateModel.findOneAndUpdate(
        { slug },
        { $set: data },
        { upsert: true }
      ).catch(err => (result = false));
      return result;
    };

    const options = {
      method: "get",
      uri: url + "/auth",
      body: {},
      headers: {
        token: data.token
      },
      json: true
    };
    const auth = await request(options);

    if (auth.code !== 10000) return;
    console.log("开始更新");

    const updateData = await AnimateModel.find({
      "information.isUpdate": true
    });

    await HigherModel.findOneAndUpdate(
      {},
      {
        $set: {
          update: {
            ...data.update,
            total: updateData.length,
            success: 0,
            error: 0,
            created: new Date()
          }
        }
      }
    );

    for (let index = 0; index < updateData.length; index++) {
      const temp = await HigherModel.findOne();
      const element = updateData[index];
      const remoteData = await request({
        method: "post",
        uri: url + "/animate",
        body: {
          list: [element.slug]
        },
        headers: {
          token: data.token
        },
        json: true
      });

      let result;
      if (remoteData.code !== 10000 || remoteData.data.length === 0) {
        result = false;
      } else {
        result = await save(remoteData.data[0]);
      }

      let importData = {};
      if (result) {
        importData = {
          ...temp.update,
          success: (temp.update.success || 0) + 1,
          error: temp.update.error || 0,
          created: new Date()
        };
      } else {
        importData = {
          ...temp.update,
          success: temp.update.success || 0,
          error: (temp.update.error || 0) + 1,
          created: new Date()
        };
      }

      await HigherModel.findOneAndUpdate({}, { $set: { import: importData } });
      await sleep();
    }
  }
}
module.exports = higherController;
