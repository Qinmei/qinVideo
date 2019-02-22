const {
    CategoryModel,
  } = require('../models/index');
const { array2Tree } = require('../middleware/common');

class categoryController {
  
    // query列表
    static async category_query(ctx) {
        const { type } = ctx.query;
        const result = await CategoryModel.find({type}).catch(err=>{return {code:404,msg:err.message}});
        const total = await CategoryModel.count({type});
        // 通过 parent 获取循环结构
        const data = Array.isArray(result) ? array2Tree(result) : result;
        ctx.send({ data,total} );
    }

    // category post
    static async category_post(ctx) {
        const post = ctx.request.body;
        const data = await CategoryModel.create(post).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }
  
    // category Get
    static async category_get(ctx) {
        const { slug } = ctx.params;
        const data = await CategoryModel.findOne({slug}).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

    // category put
    static async category_put(ctx) {
        const { slug } = ctx.params;
        const data = ctx.request.body;
        const data = await CategoryModel.updateOne({slug},data).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

    // category delete
    static async category_delete(ctx) {
        const { slug } = ctx.params;
        const data = await CategoryModel.deleteOne({slug}).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

}
    
module.exports = categoryController;