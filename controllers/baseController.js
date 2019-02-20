const jwt = require('jsonwebtoken');
const {
    UserModel,
    AnimateModel,
  } = require('../models/index');
const config = require('../config');

class baseController {
  
    // 登录
    static async login(ctx) {
      const {name,password} = ctx.request.body;
      const nameResult = await UserModel.findOne({name});
      const passwordResult = password === nameResult.password;
      if(!nameResult){
        return ctx.error({msg:'用户名错误'});
      } 
      if(!passwordResult){
        return ctx.error({msg:'密码错误'});
      }

      const { _id,
              email,
              level,
              score,
              avatar,
              background,
              introduce
            } = nameResult;

      const token = jwt.sign(
        {id:_id,name,email,level,score,avatar,background,introduce},
        config.token.secret, 
        { expiresIn: config.token.expired }
      );
      
      ctx.success({data:{name,token},msg:'登录成功'})
    }

    // 注册
    static async register(ctx) {
      const {name,password} = ctx.request.body;
      const result = await UserModel.create({name,password}).catch(err => err);
      ctx.send({ result,success:'注册成功',error:'注册失败' });
    }

    // 刷新token
    static async refreshtoken(ctx) {
      const {title,size,page,sort,sortby,area,kind,year,tag} = ctx.query;
      const result = await AnimateModel.find();
      ctx.error({ msg:'上传成功!',data: { }} )
    }
  
}
    
module.exports = baseController;