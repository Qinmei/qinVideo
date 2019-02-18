const {
    CommentModel,
} = require('../models/index');

class commentController {
  
    // 评论列表
    static async comment_query(ctx) {
        const {
            size=10000,
            page=1,
            sort='createdAt',
            ...commentQuery
        } = ctx.query;

        const result = await CommentModel.find(commentQuery)
                                         .populate({path:'author',
                                                    select:'-_id name level score avatar background introduce',
                                                    model:'User'})
                                         .sort(sort)
                                         .skip((page - 1) * size)
                                         .limit(Number(size));
        const total = await CommentModel.count(commentQuery);
        ctx.send({ result,total,success:'搜索成功',error:'搜索失败' } );
    }

    // comment post 
    static async comment_post(ctx) {
        const comment = ctx.request.body;
        const result = await CommentModel.create(comment);
        ctx.send({ result,success:'创建成功',error:'创建失败' } );
    }
  
    // comment Get
    static async comment_get(ctx) {
        const { id } = ctx.params;
        const result = await CommentModel.findById(id)
                                         .populate({path:'author',
                                                select:'-_id name level score avatar background introduce',
                                                model:'User'});;
        ctx.send({ result,success:'查询成功',error:'查询失败' } );
    }

    // comment put
    static async comment_put(ctx) {
        const { id } = ctx.params;
        const data = ctx.request.body;
        const result = await CommentModel.findByIdAndUpdate(id,data);
        ctx.send({ result,success:'修改成功',error:'修改失败' } );
    }

    // comment delete
    static async comment_delete(ctx) {
        const { id } = ctx.params;
        const result = await CommentModel.findByIdAndDelete(id);
        ctx.send({ result,success:'删除成功',error:'删除失败' } );
    }

}
    
module.exports = commentController;