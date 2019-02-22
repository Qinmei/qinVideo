const {
    CommentModel,
} = require('../models/index');
const { array2Tree } = require('../middleware/common');
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
        let data = result;
        if(Array.isArray(result)){
            const newdata = array2Tree(result);
            data = newdata.splice((page - 1)*size, page * size);
        }
        const total = await CommentModel.count(commentQuery);
        ctx.send({ data,total } );
    }

    // comment post 
    static async comment_post(ctx) {
        const comment = ctx.request.body;
        const data = await CommentModel.create(comment).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );
    }
  
    // comment Get
    static async comment_get(ctx) {
        const { id } = ctx.params;
        const data = await CommentModel.findById(id)
                                         .populate({path:'author',
                                                select:'-_id name level score avatar background introduce',
                                                model:'User'})
                                         .catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );
    }

    // comment put
    static async comment_put(ctx) {
        const { id } = ctx.params;
        const data = ctx.request.body;
        const data = await CommentModel.findByIdAndUpdate(id,data).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );
    }

    // comment delete
    static async comment_delete(ctx) {
        const { id } = ctx.params;
        const data = await CommentModel.findByIdAndDelete(id).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data } );
    }

}
    
module.exports = commentController;