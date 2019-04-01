const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    title: {                                          // 标题
      type: String, 
      required: true 
    },                 
    status: {                                         // 状态
      type:String,
      enum:['unactive','active'],
      default:'unactive'
    },
    price:{type:Number,required:true},                 // 价格
    upLevel:{type:Number},                             // 提升至等级
    addScore:{type:Number},                            // 添加积分
    addExpired:{type:Number},
    introduce:String,
    cover:String,
    addons:Schema.Types.Mixed
  },{
    timestamps: true
  }
);

module.exports=mongoose.model('Shop', ShopSchema);