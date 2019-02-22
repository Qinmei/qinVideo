const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    slug:{                                           // 别名, 唯一标识符
        type: String, 
        required: true, 
        index: true,
        unique: true,
    },
    type:{
        type:String,
        enum:['area','year','kind','tag','post'],
        required:true
    },
    cover:{
        type:String
    },
    introduce:{
        type:String
    },
    parent:{
        type:Schema.Types.ObjectId,
    }
});

module.exports=mongoose.model('Category', CategorySchema);