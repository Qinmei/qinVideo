const {
  UserModel,
} = require('../models/index');

class userController {

  // query列表
  static async user_query(ctx) {
      const {
          size=12,
          page=1,
          sort='createdAt',
          ...userQuery
      } = ctx.query;

      const result = await UserModel.find(userQuery,{_id:0,name:1,level:1,score:1,avatar:1,background:1,introduce:1})
                                    .sort(sort)
                                    .skip((page - 1) * size)
                                    .limit(Number(size));
      const total = await UserModel.count(userQuery);
      ctx.send({ result,total,success:'搜索成功',error:'搜索失败' } );
  }

  // post post 
  static async user_post(ctx) {
      const post = ctx.request.body;
      const result = await UserModel.create(post);
      ctx.send({ result,success:'创建成功',error:'创建失败' } );
  }

  // post Get
  static async user_get(ctx) {
      const { slug } = ctx.params;
      const result = await UserModel.findOne({name:slug})
                                    .populate({path:'author',
                                              select:'-_id name level score avatar background introduce',
                                              model:'User'});
      ctx.send({ result,success:'查询成功',error:'查询失败' } );
  }

  // post put
  static async user_put(ctx) {
      const { slug } = ctx.params;
      const data = ctx.request.body;
      const result = await UserModel.updateOne({name:slug},data);
      ctx.send({ result,success:'修改成功',error:'修改失败' } );
  }

  // aniamte delete
  static async user_delete(ctx) {
      const { slug } = ctx.params;
      const result = await UserModel.deleteOne({name:slug});
      ctx.send({ result,success:'删除成功',error:'删除失败' } );
  }

}
  
module.exports = userController;