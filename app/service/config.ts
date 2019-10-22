import { Service } from "egg";

class ConfigService extends Service {
  async info() {
    const data = this.ctx.model.Config.findOne({});
    return data;
  }

  async create(data: any) {
    const config = await this.info();
    if (config) {
      await this.destroy();
    }

    const result = await this.ctx.model.Config.create(data);
    return result;
  }

  async destroy() {
    const result = await this.ctx.model.Config.deleteMany({});
    return result;
  }
}

export default ConfigService;
