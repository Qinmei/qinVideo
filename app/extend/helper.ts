const rules = require("../utils/validate");
const Parameter = require("parameter");
const validator = new Parameter();

module.exports = {
  // 处理成功响应
  success(data = null) {
    this.ctx.body = {
      code: 10000,
      data
    };
    return;
  },

  // 处理失败响应
  error(code) {
    this.ctx.body = {
      code,
      msg: this.app.config.code[code]
    };
    return;
  },

  // 自己判断
  send(data) {
    typeof data === "number" ? this.error(data) : this.success(data);
  },

  validate(rule, data) {
    const err = validator.validate(rules[rule], data);
    if (err) {
      this.ctx.body = {
        code: 10004,
        msg: err
      };
      return;
    }
  }
};
