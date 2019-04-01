const {
    CategoryModel,
  } = require('../models/index');
const { array2Tree } = require('../utils/common');

class categoryController {
  
    // query列表
    static async category_query(ctx) {
        const { type } = ctx.query;
        const result = await CategoryModel.find({type}).catch(err=>{return {code:404,msg:err.message}});
        const total = await CategoryModel.countDocuments({type});
        // 通过 parent 获取循环结构
        const data = Array.isArray(result) ? array2Tree(result) : result;
        ctx.send({ data,total} );
    }

    // category post
    static async category_post(ctx) {
        const { user } = ctx.state;
        if(user.level >99){
            const post = ctx.request.body;
            const data = await CategoryModel.create(post).catch(err=>{return {code:404,msg:err.message}});
            ctx.send({ data} );
        }else{
            ctx.error({msg:'没有权限',code:402})
        }
    }

    static async category_get(ctx) {
        const { id } = ctx.query;
        const data = await CategoryModel.findById(id).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

    // category put
    static async category_put(ctx) {
        const { id } = ctx.params;
        const data = ctx.request.body;
        const { user } = ctx.state;
        if(user.level >99){
            const result = await CategoryModel.findByIdAndUpdate(id,data).catch(err=>{return {code:404,msg:err.message}});
            ctx.send({ data:result } );
        }else{
            ctx.error({msg:'没有权限',code:402})
        }
    }

    // category delete
    static async category_delete(ctx) {
        const { id } = ctx.params;
        const { user } = ctx.state;
        if(user.level >9){
            const list = await CategoryModel.find({parent:id},);
            if(list.length > 0){
                const arr = [];
                list.map(item=>{
                    arr.push(item._id)
                })
                await CategoryModel.remove({_id: { $in: list }});
            }
            const data = await CategoryModel.findByIdAndDelete(id).catch(err=>{return {code:404,msg:err.message}});
            ctx.send({ data} );
        }else{
            ctx.error({msg:'没有权限',code:402})
        }
    }

    static async category_put_batch(ctx) {
        const { type,list, data } = ctx.request.body;
        const { user } = ctx.state;
        if(user.level >99){
            if(type === 'all'){
                const result = await CategoryModel.update({}, {$set:data}, {multi: true}).catch(err=>{return {code:404,msg:err.message}});
                ctx.send({ data:result } );
            }else{
                const result = await CategoryModel.update({ _id: { $in: list } }, {$set:data}, {multi: true}).catch(err=>{return {code:404,msg:err.message}});
                ctx.send({ data:result } );
            };
        }else{
            ctx.error({msg:'没有权限',code:402})
        }
    }

    static async category_delete_batch(ctx) {
        const { type,list } = ctx.request.body;
        const { user } = ctx.state;
        if(user.level >99){
            if(type === 'all'){
                const data = await CategoryModel.remove({}).catch(err=>{return {code:404,msg:err.message}});
                ctx.send({ data } );
            }else{
                const data = await CategoryModel.remove({ _id: { $in: list } }).catch(err=>{return {code:404,msg:err.message}});
                ctx.send({ data } );
            };
        }else{
            ctx.error({msg:'没有权限',code:402})
        }
    }

}
    
module.exports = categoryController;