import { Controller } from "egg";

class UserController extends Controller {
  async query() {
    const { ctx, service } = this;
    const { query } = ctx;
    ctx.helper.validate("query", query);
    const result = await service.user.query(query).catch(() => 11001);
    ctx.helper.send(result);
  }

  async info() {}

  async create() {}

  async update() {}

  async updateMany() {}

  async destroy() {}
  async destroyMany() {}
}

export default UserController;
