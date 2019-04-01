const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    shop:{
      type:Schema.Types.ObjectId,
      required:true
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