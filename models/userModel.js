const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true,unique:true },       // 用户名
  password: { type: String, required: true },               // 密码
  refreshToken: {type:String,required:true},                // refresh token
  email:{ type: String, required: true,unique:true},                   // 邮箱
  level: { type: Number,default:1 },                        // 等级
  score: { type: Number,default:0 },                        // 积分
  avatar: { type: String },                                 // 头像
  background: { type: String },                             // 背景图
  introduce: { type: String },                              // 简介
  status: {
    type:String,
    enum:['inactive','active','unused'],
    default:'inactive'
  },                                                        // 状态
  posts:{                                                   // 文章
    own:[{ type: Schema.Types.ObjectId }],
    like:[{ type: Schema.Types.ObjectId }],
    unlike:[{ type: Schema.Types.ObjectId }]
  },
  animate:{                                                 // 动漫
    own:[{ type: Schema.Types.ObjectId }],
    like:[{ type: Schema.Types.ObjectId }],
    unlike:[{ type: Schema.Types.ObjectId }],
    rate:[{ animate: Schema.Types.ObjectId, rate:Number }]
  },
  comment:{                                                 // 评论
    own:[{ type: Schema.Types.ObjectId }],
    like:[{ type: Schema.Types.ObjectId }],
    unlike:[{ type: Schema.Types.ObjectId }]
  },
  report:[{ type: Schema.Types.ObjectId }],                 // 举报
  order:[{ type: Schema.Types.ObjectId }],                  // 订单
  addons:Schema.Types.Mixed
  },{
    timestamps: true
  }
);

module.exports=mongoose.model('User', UserSchema);