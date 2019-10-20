import rules from "../utils/validate";
import codes from "../utils/code";
import * as common from "../utils/common";

module.exports = {
  // 处理成功响应
  success(data = null) {
    this.ctx.body = {
      code: 10000,
      data
    };
    throw "code";
  },

  // 处理失败响应
  error(code) {
    this.ctx.body = {
      code,
      msg: codes[code]
    };
    throw "code";
  },

  // 自己判断
  send(data) {
    typeof data === "number" ? this.error(data) : this.success(data);
  },

  validate(rule, data) {
    try {
      this.ctx.validate(rules[rule], data);
    } catch (err) {
      console.log(err);
      this.ctx.body = {
        code: 10004,
        msg: err
      };
      throw "code";
    }
  },
  ...common
};
