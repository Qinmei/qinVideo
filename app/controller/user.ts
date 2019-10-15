"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  async list() {
    const { ctx, service } = this;
    const { query } = ctx;
    this.ctx.helper.validate("userQuery", query);
    const result = await service.user.query(query).catch(() => 11001);
    ctx.helper.send(result);
  }
}

module.exports = UserController;
