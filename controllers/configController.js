const {
    ConfigModel,
  } = require('../models/index');
  
class configController {
  
    // config Get
    static async config_get(ctx) {
        const data = await ConfigModel.find().catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

    // config put
    static async config_put(ctx) {
        const data = ctx.request.body;
        const data = await ConfigModel.updateOne({},data).catch(err=>{return {code:404,msg:err.message}});
        ctx.send({ data} );
    }

}
    
module.exports = configController;