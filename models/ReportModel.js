const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  author: Schema.Types.ObjectId,                            // 用户名
  content: { type: String, required: true },                // 内容
  title: String,                                            // 标题
  target: Schema.Types.ObjectId,                            // 举报对象
  status: String,                                           // 图片,
  kind:String,
  addons:Schema.Types.Mixed
  },{
    timestamps: true
  }
);

module.exports=mongoose.model('Report', ReportSchema);