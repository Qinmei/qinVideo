import { Service } from "egg";

class ReportService extends Service {
  async query({ page, size, sortBy, sortOrder, name, status, type }) {
    const skip: number = (page - 1) * size;
    const limit: number = size;

    const query: any = {};
    name && (query.content = { $regex: name, $options: "$i" });
    status && (query.status = status);
    type && (query.type = type);

    const result = await this.ctx.model.Report.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder, _id: -1 });

    const total = await this.ctx.model.Report.find(query).countDocuments();

    return {
      list: result,
      total
    };
  }

  async info(id: string) {
    const data = this.ctx.model.Report.findById(id);
    return data;
  }

  async create(data: any) {
    const result = await this.ctx.model.Report.create(data);
    return result;
  }

  async update(ids: Array<string>, data: any) {
    const result = await this.ctx.model.Report.updateMany(
      { _id: { $in: ids } },
      { $set: data }
    );
    return result;
  }

  async destroy(ids: Array<string>) {
    const result = await this.ctx.model.Report.deleteMany({
      _id: { $in: ids }
    });
    return result;
  }
}

export default ReportService;
