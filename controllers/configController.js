const {
    ConfigModel,
  } = require('../models/index');
  
class configController {
  
    // config Get
    static async config_get(ctx) {
        const result = await ConfigModel.find();
        ctx.send({ result,success:'查询成功',error:'查询失败' } );
    }

    // config put
    static async config_put(ctx) {
        const data = ctx.request.body;
        const result = await ConfigModel.updateOne({},data);
        ctx.send({ result,success:'修改成功',error:'修改失败' } );
    }

}
    
module.exports = configController;