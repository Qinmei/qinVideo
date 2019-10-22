import { Controller } from "egg";

class AnimateController extends Controller {
  async query() {
    const { ctx, service } = this;
    const { query } = ctx;

    ctx.helper.validate("query", query);

    const result = await service.animate.query(query).catch(() => 11000);
    ctx.helper.send(result);
  }

  async info() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    ctx.helper.validate("id", ctx.params);

    const result = await service.animate.info(id).catch(() => 11001);
    ctx.helper.send(result);
  }

  async create() {
    const { ctx, service } = this;
    const data = ctx.request.body;

    ctx.helper.validate("animate", data, true);

    const result = await service.animate.create(data).catch(err => 11002);
    ctx.helper.send(result);
  }

  async update() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const id = ctx.params.id;

    ctx.helper.validate("id", ctx.params);
    ctx.helper.validate("animateUpdate", data);

    const result = await service.animate.update([id], data).catch(() => 11003);
    ctx.helper.send(result);
  }

  async updateMany() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const ids = data.ids;

    ctx.helper.validate("ids", { ids });
    ctx.helper.validate("animateUpdate", data);

    const result = await service.animate
      .update(data.ids, data)
      .catch(() => 11003);
    ctx.helper.send(result);
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    ctx.helper.validate("id", ctx.params);

    const result = await service.animate.destroy([id]).catch(() => 11004);
    ctx.helper.send(result);
  }

  async destroyMany() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;

    ctx.helper.validate("ids", { ids });

    const result = await service.animate.destroy(ids).catch(() => 11004);
    ctx.helper.send(result);
  }
}

export default AnimateController;
