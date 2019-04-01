const jwt = require('jsonwebtoken');
const {
    UserModel,
  } = require('../models/index');
const config = require('../../config');

module.exports = (level) => {
    return async (ctx, next)=>{
        const token = ctx.header.authorization; 
        if(token || level > 0){
            try{
                const { id } = await jwt.verify(token,config.tokenSecret);
                const userInfo = await UserModel.findById(id);
                
                if(userInfo){
                    ctx.state.user = userInfo;
                }else{
                    ctx.state.user = {
                        name:null,
                        level:0
                    }
                }

            }catch(err){
                ctx.status = 401;
                return ctx.error({
                    msg:err.message
                })
            }
        }else{
            ctx.state.user = {
                name:null,
                level:0
            }
        }

        if(ctx.state.user.level >= level){
            await next();
        }else{
            return ctx.error({msg:'没有权限',code:402})
        }

    }
}