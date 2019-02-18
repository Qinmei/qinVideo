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
                                      .limit(Number(size));
        const total = await PostModel.count(postQuery);
        ctx.send({ result,total,success:'搜索成功',error:'搜索失败' } );
    }

    // post post 
    static async post_post(ctx) {
        const post = ctx.request.body;
        const result = await PostModel.create(post);
        ctx.send({ result,success:'创建成功',error:'创建失败' } );
    }
  
    // post Get
    static async post_get(ctx) {
        const { slug } = ctx.params;
        const result = await PostModel.findOne({slug})
                                      .populate({path:'author',
                                                select:'-_id name level score avatar background introduce',
                                                model:'User'});
        ctx.send({ result,success:'查询成功',error:'查询失败' } );
    }

    // post put
    static async post_put(ctx) {
        const { slug } = ctx.params;
        const data = ctx.request.body;
        const result = await PostModel.updateOne({slug},data);
        ctx.send({ result,success:'修改成功',error:'修改失败' } );
    }

    // aniamte delete
    static async post_delete(ctx) {
        const { slug } = ctx.params;
        const result = await PostModel.deleteOne({slug});
        ctx.send({ result,success:'删除成功',error:'删除失败' } );
    }

}
    
module.exports = postController;