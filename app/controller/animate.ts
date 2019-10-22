import { Controller } from "egg";

class AnimateController extends Controller {
  async query() {
    const { ctx, service } = this;
    const { query } = ctx;

    ctx.helper.validate("query", query);

    const result = await service.animate.query(query).catch(() => 12000);
    ctx.helper.send(result);
  }

  async info() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    ctx.helper.validate("id", { id });

    const result = await service.animate.info(id).catch(() => 12001);
    ctx.helper.send(result);
  }

  async create() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const userId = ctx.state.user._id;

    data.author = userId;
    ctx.helper.validate("animate", data, true);

    const result = await service.animate.create(data).catch(() => 12002);
    ctx.helper.send(result);
  }

  async update() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const id = ctx.params.id;

    ctx.helper.validate("id", { id });
    ctx.helper.validate("animate", data);

    const result = await service.animate.update([id], data).catch(() => 12003);
    ctx.helper.send(result);
  }

  async updateMany() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const { ids } = data;

    ctx.helper.validate("ids", { ids });
    ctx.helper.validate("animate", data);

    const result = await service.animate
      .update(data.ids, data)
      .catch(() => 12003);
    ctx.helper.send(result);
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    ctx.helper.validate("id", { id });

    const result = await service.animate.destroy([id]).catch(() => 12004);
    ctx.helper.send(result);
  }

  async destroyMany() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;

    ctx.helper.validate("ids", { ids });

    const result = await service.animate.destroy(ids).catch(() => 12004);
    ctx.helper.send(result);
  }
}

export default AnimateController;
