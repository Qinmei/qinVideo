const {
    PostModel,
  } = require('../models/index');
  
class postController {
  
    // query列表
    static async post_query(ctx) {
        const {
            size=12,
            page=1,
            sort='createdAt',
            ...postQuery
        } = ctx.query;

        const result = await PostModel.find(postQuery)
                                      .populate({path:'author',
                                                 select:'-_id name level score avatar background introduce',
                                                 model:'User'})
                                      .sort(sort)
                                      .skip((page - 1) * size)
                                      .limit(Number(size))
                                      .catch(err=>{return {code:404,msg:err.message}});
        const total = await PostModel.count(postQuery);
        ctx.send({ data,total} );
    }

    // post post 
    static async post_post(ctx) {
        const post = ctx.request.body;
        const data = await PostModel.create(post).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }
  
    // post Get
    static async post_get(ctx) {
        const { slug } = ctx.params;
        const result = await PostModel.findOne({slug})
                                      .populate({path:'author',
                                                select:'-_id name level score avatar background introduce',
                                                model:'User'})
                                     .catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

    // post put
    static async post_put(ctx) {
        const { slug } = ctx.params;
        const data = ctx.request.body;
        const result = await PostModel.updateOne({slug},data).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

    // aniamte delete
    static async post_delete(ctx) {
        const { slug } = ctx.params;
        const result = await PostModel.deleteOne({slug}).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

}
    
module.exports = postController;