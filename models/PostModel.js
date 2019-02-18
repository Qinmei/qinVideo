const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {                                        // 标题
        type: String, 
        required: true 
    },                 
    slug: {                                         // 别名, 唯一标识符
      type: String, 
      required: true, 
      index: true,
      unique: true,
    },
    status:String,                                  // 状态
    author: Schema.Types.ObjectId,                  // 用户名
    category:[{String}],                            // 分类
    cover:String,                                   // 封面图
    content:String,                                 // 内容
    like: Number,                                   // 喜欢
    unlike:Number,                                  // 不喜欢
    addons:Schema.Types.Mixed
    },{
      timestamps: true
    }
);

module.exports=mongoose.model('Post', PostSchema);