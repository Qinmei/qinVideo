const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderId: {                                          // 订单号
        type: String, 
        required: true 
    },                 
    price: {                                            // 金额
      type: Number, 
      required: true, 
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true
    },                             
    addons:Schema.Types.Mixed
},{
  timestamps: true
}
);

module.exports=mongoose.model('Order', OrderSchema);