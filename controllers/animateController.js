const {
    AnimateModel,
  } = require('../models/index');
  
class animateController {
  
    // animate列表
    static async animate_query(ctx) {
        const {
            size=12,
            page=1,
            sort='title',
            ...animateQuery
        } = ctx.query;
        const result = await AnimateModel.find(animateQuery,{category:0,play:0,eposide:0})
                                         .populate({path:'author',
                                                    select:'-_id name level score avatar background introduce',
                                                    model:'User'})
                                         .sort(sort)
                                         .skip((page - 1) * size)
                                         .limit(Number(size));
        const total = await AnimateModel.count(animateQuery);
        ctx.send({ result,total,success:'搜索成功',error:'搜索失败' } );
    }

    // animate post 
    static async animate_post(ctx) {
        const animate = ctx.request.body;
        const result = await AnimateModel.create(animate);
        ctx.send({ result,success:'创建成功',error:'创建失败' } );
    }
  
    // animate Get
    static async animate_get(ctx) {
        const { slug } = ctx.params;
        const result = await AnimateModel.findOne({slug})
                                         .populate({path:'author',
                                                select:'-_id name level score avatar background introduce',
                                                model:'User'});;
        ctx.send({ result,success:'查询成功',error:'查询失败' } );
    }

    // animate put
    static async animate_put(ctx) {
        const { slug } = ctx.params;
        const data = ctx.request.body;
        const result = await AnimateModel.updateOne({slug},data);
        ctx.send({ result,success:'修改成功',error:'修改失败' } );
    }

    // aniamte delete
    static async animate_delete(ctx) {
        const { slug } = ctx.params;
        const result = await AnimateModel.deleteOne({slug});
        ctx.send({ result,success:'删除成功',error:'删除失败' } );
    }

}
    
module.exports = animateController;