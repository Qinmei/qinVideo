const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
  name:  { type:String, default:'' },                                             // 网站名
  slogan: { type:String, default:'' },                                            // 标语
  color: { type:String, default:'' },                                             // 颜色
  qq: { type:String, default:'' },                                                // 归属
  email: { type:String, default:'' },                                             // QQ链接
  weixin: { type:String, default:'' },                                            // 微信链接
  headimg: { type:String, default:'' },                                           // 首页头图
  mobleimg: { type:String, default:'' },                                          // 手机头图
  loginimg: { type:String, default:'' },                                          // 登陆大图
  avatar: { type:String, default:'' },                                            // 默认头像图
  background: { type:String, default:'' },                                        // 默认背景图
  playprefix: { type:String, default:'' },                                        // 播放链接前缀
  addons:Schema.Types.Mixed
  }
);

module.exports=mongoose.model('Config', ConfigSchema);