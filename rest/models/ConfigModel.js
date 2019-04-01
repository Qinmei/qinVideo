const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
  name:  { type:String, default:'' },                                             // 网站名
  slogan: { type:String, default:'' },                                            // 标语
  information: { type:String, default:'' },                                       // 简介
  color: { type:String, default:'' },                                             // 主题色
  qq: { type:String, default:'' },                                                // qq群链接
  email: { type:String, default:'' },                                             // 邮箱
  app: { type:String, default:'' },                                               // app
  headimg: { type:String, default:'' },                                           // 首页头图
  mobleimg: { type:String, default:'' },                                          // 手机头图
  loginimg: { type:String, default:'' },                                          // 登陆大图
  avatar: { type:String, default:'' },                                            // 默认头像图
  background: { type:String, default:'' },                                        // 默认背景图
  menu:[{type:Schema.Types.ObjectId}],                                            // 类型菜单
  postCat:[{type:Schema.Types.ObjectId}],                                         // 文章置顶
  playLimit: [{                                                                   // 播放限制
    level:Number,
    prefix:String,
    key:String,
    expired:Number
  }],
  jiexi:[{                                                                        // 解析
    pattern:String,
    prefix:String,
  }],
  emailSetting:{                                                                  // 邮件方式                                              
    type:{
      type:String,
      enum:[
          'smtp',
          'sendgrid',
      ],
      default:'smtp'
    },
    name:String,
    sender:String
  },
  smtp:{                                                                          // 邮箱
    host: String,
    port: Number,
    secure: Boolean,
    user: String,
    pass:String
  },
  sendgrid:{                                                                      // sendgird
    key:String,
  },
  addons:Schema.Types.Mixed
});

module.exports=mongoose.model('Config', ConfigSchema);