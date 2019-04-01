const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const KeySchema = new Schema({
    key: {                                            // 密钥
      type: String, 
      required: true,
      unique:true
    },                 
    status: {                                         // 状态
      type:String,
      enum:['unactive','active'],
      default:'unactive'
    },
    price:{type:Number,required:true},                 // 价格
    addons:Schema.Types.Mixed
  },{
    timestamps: true
  }
);

module.exports=mongoose.model('Key', KeySchema);