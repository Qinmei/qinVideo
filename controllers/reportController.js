const {
    ReportModel,
  } = require('../models/index');
  
class reportController {
  
    // query列表
    static async report_query(ctx) {
        const {
            size=12,
            page=1,
            sort='createdAt',
            ...reportQuery
        } = ctx.query;

        const result = await ReportModel.find(reportQuery)
                                        .populate({path:'author',
                                                   select:'-_id name level score avatar background introduce',
                                                   model:'User'})
                                        .sort(sort)
                                        .skip((page - 1) * size)
                                        .limit(Number(size));
        const total = await ReportModel.count(reportQuery);
        ctx.send({ result,total,success:'搜索成功',error:'搜索失败' } );
    }

    // post post 
    static async report_post(ctx) {
        const post = ctx.request.body;
        const result = await ReportModel.create(post);
        ctx.send({ result,success:'创建成功',error:'创建失败' } );
    }
  
    // post Get
    static async report_get(ctx) {
        const { id } = ctx.params;
        const result = await ReportModel.findById(id)
                                      .populate({path:'author',
                                                select:'-_id name level score avatar background introduce',
                                                model:'User'});
        ctx.send({ result,success:'查询成功',error:'查询失败' } );
    }

    // post put
    static async report_put(ctx) {
        const { id } = ctx.params;
        const data = ctx.request.body;
        const result = await ReportModel.findByIdAndUpdate(id,data);
        ctx.send({ result,success:'修改成功',error:'修改失败' } );
    }

    // aniamte delete
    static async report_delete(ctx) {
        const { id } = ctx.params;
        const result = await ReportModel.findByIdAndDelete(id);
        ctx.send({ result,success:'删除成功',error:'删除失败' } );
    }

}
    
module.exports = reportController;