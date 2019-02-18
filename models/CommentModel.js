const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: Schema.Types.ObjectId,                          // 用户名
  belong: { type: String, required: true },                 // 归属
  parent: Schema.Types.ObjectId,                            // 父级
  content: String,                                          // 内容
  image: [{ type: String}],                                 // 图片
  video: String,                                            // 视频
  like: Number,                                             // 背景图
  unlike: Number,                                           // 简介 
  addons:Schema.Types.Mixed
  },{
    timestamps: true
  }
);

module.exports=mongoose.model('Comment', CommentSchema);