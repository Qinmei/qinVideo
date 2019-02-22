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

        const data = await ReportModel.find(reportQuery)
                                        .populate({path:'author',
                                                   select:'-_id name level score avatar background introduce',
                                                   model:'User'})
                                        .sort(sort)
                                        .skip((page - 1) * size)
                                        .limit(Number(size))
                                        .catch(err=>{return {code:404,msg:err.message}});
        const total = await ReportModel.count(reportQuery);
        ctx.send({ data,total });
    }

    // post post 
    static async report_post(ctx) {
        const post = ctx.request.body;
        const data = await ReportModel.create(post).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data });
    }
  
    // post Get
    static async report_get(ctx) {
        const { id } = ctx.params;
        const data = await ReportModel.findById(id)
                                      .populate({path:'author',
                                                select:'-_id name level score avatar background introduce',
                                                model:'User'})
                                      .catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data });
    }

    // post put
    static async report_put(ctx) {
        const { id } = ctx.params;
        const data = ctx.request.body;
        const data = await ReportModel.findByIdAndUpdate(id,data).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data });
    }

    // aniamte delete
    static async report_delete(ctx) {
        const { id } = ctx.params;
        const data = await ReportModel.findByIdAndDelete(id).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data });
    }

}
    
module.exports = reportController;