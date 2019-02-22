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
        const data = await AnimateModel.find(animateQuery,{category:0,play:0,eposide:0})
                                         .populate({path:'author',
                                                    select:'-_id name level score avatar background introduce',
                                                    model:'User'})
                                         .sort(sort)
                                         .skip((page - 1) * size)
                                         .limit(Number(size))
                                         .catch(err=>{return {code:404,msg:err.message}});
        const total = await AnimateModel.count(animateQuery);
        ctx.send({ data,total} );
    }

    // animate post 
    static async animate_post(ctx) {
        const { user } = ctx.state;
        const animate = ctx.request.body;
        animate.author = user._id;
        const data = await AnimateModel.create(animate).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );
    }
  
    // animate Get
    static async animate_get(ctx) {
        const { slug } = ctx.params;
        const data = await AnimateModel.findOne({slug})
                                         .populate({path:'author',
                                                select:'-_id name level score avatar background introduce',
                                                model:'User'})
                                         .catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );
    }

    // animate put
    static async animate_put(ctx) {
        const { slug } = ctx.params;
        const data = ctx.request.body;
        const data = await AnimateModel.updateOne({slug},data).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );
    }

    // aniamte delete
    static async animate_delete(ctx) {
        const { slug } = ctx.params;
        const data = await AnimateModel.deleteOne({slug}).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );
    }

}
    
module.exports = animateController;