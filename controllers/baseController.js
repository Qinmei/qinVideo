const {
    userModel,
    AnimateModel,
  } = require('../models/index');
  
class baseController {
  
    // 
    static async slugSearch(ctx) {
      const {title,size,page,sort,sortby,area,kind,year,tag} = ctx.query;
      const result = await AnimateModel.find();
      ctx.error({ msg:'上传成功!',data: { }} )
    }

  
}
    
module.exports = baseController;