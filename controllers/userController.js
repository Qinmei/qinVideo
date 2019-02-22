const {
  UserModel,
} = require('../models/index');

const userNotShow = {
    _id:0,
    password:0,
    refreshToken:0,
    report:0,
    order:0,
    addons:0
}

class userController {

  // query列表
  static async user_query(ctx) {
      const { user } = ctx.state;
      if(user.level < 9){
            ctx.error({msg:'没有权限',code:402})
      }else{
        const {
            size=12,
            page=1,
            sort='createdAt',
            ...userQuery
        } = ctx.query;
  
        const data = await UserModel.find(userQuery,userNotShow)
                                    .sort(sort)
                                    .skip((page - 1) * size)
                                    .limit(Number(size))
                                    .catch(err=>{return {code:404,msg:err.message}});
        const total = await UserModel.count(userQuery);
        ctx.send({ data,total} );
      }

  }

  // post Get
  static async user_get(ctx) {
      const { slug } = ctx.params;
      const data = await UserModel.findOne({name:slug},userNotShow)
                                    .catch(err=>{return {code:404,msg:err.message}});
      ctx.send({ data} );
  }

  // post put
  static async user_put(ctx) {
      const { slug } = ctx.params;
      const data = ctx.request.body;
      const { user } = ctx.state;
      if(user.level > 9){
        const result = await UserModel.updateOne({name:slug},data)
                                      .catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data:result } );
      }else if( user.name == slug ){
        Object.keys(data).map(item=>{
            !['password','email','avatar','background','introduce'].includes(item) && delete data[item]
        })
        const result = await UserModel.updateOne({name:slug},data)
                                      .catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data:result } );
      }else{
        ctx.error({msg:'没有权限',code:402})
      }

  }

  // aniamte delete
  static async user_delete(ctx) {
    if(user.level < 9){
        ctx.error({msg:'没有权限',code:402})
    }else{
      const { slug } = ctx.params;
      const result = await UserModel.deleteOne({name:slug})
                                    .catch(err=>{return {code:404,msg:err.message}});
      ctx.send({ data:result } );
    }
  }

}
  
module.exports = userController;