const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({
  name: { type: String, required: true }, // 用户名
  nickname: { type: String, required: true }, // 昵称
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports=mongoose.model('AdminUser', AdminUserSchema);