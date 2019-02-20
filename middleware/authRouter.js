const jwt = require('jsonwebtoken');
const {
    UserModel,
  } = require('../models/index');
const config = require('../config');

module.exports = ( safe ) => {
    return async (ctx, next)=>{
        if(safe){
            try{
                const token = ctx.header.authorization; 
                const { id } = await jwt.verify(token,config.token.secret);
                const userInfo = await UserModel.findById(id);
                ctx.state.user = userInfo;
                
                await next();
            }catch(err){
                ctx.status = 401;
                ctx.error({
                    msg:err.message
                })
            }
        }else{
            ctx.state.user = {
                name:null,
                level:0
            }
            await next();
        }

    }
}