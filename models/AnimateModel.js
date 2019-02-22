const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const AnimateSchema = new Schema({
    title: {                                          // 标题
      type: String, 
      required: true 
    },                 
    slug: {                                           // 别名, 唯一标识符
      type: String, 
      required: true, 
      index: true,
      unique: true,
    },
    author:Schema.Types.ObjectId,
    status: {
      type:String,
      enum:['draft','publish','trash'],
      default:'draft'
    },
    information:{                                     // 动漫详情
      introduce:String,                               // 简介
      staff:[{type:String}],                          // 工作人员
      actor:[{type:String}],                          // 声优
      firstPlay: String,                              // 首播
      updateDay: Number,                              // 周几播放
      rateStar:Number,                                // 评分星级
      rateCount: Number,                              // 评分人数
      impression:String,                              // 印象,
      episodeCount:Number,                            // 集数
      like:Number,                                    // 喜欢
      unlike:Number                                   // 不喜欢
    },
    play:{
      kind: String,                                   // 播放类型
      level: Number,                                  // 等级限定
      linkPrefix:String,                              // 链接前缀
      downTitle:String,                               // 下载标题
      downLink:String                                 // 下载链接
    },
    eposide:[{                                        // 剧集信息
      season:String,                                  // 季数
      list:[{
        sort:Number,                                  // 集数
        title:String,                                 // 标题
        link:String,                                  // 链接
        danmu:String                                  // 弹幕ID
      }]
    }],
    cover:{
      vertical:String,                                // 竖向大图
      horizontal:String,                              // 横向大图
      max:String,                                     // 超大海报
      mid:String,                                     // 中等海报
      min:String,                                     // 小型海报
    },
    category:{
      area: [{ type: String }],        // 地区
      kind: [{ type: String }],        // 类型
      year: [{ type: String }],        // 年份
      tag: [{ type: String }],         // 标签
    },
    addons:Schema.Types.Mixed
  },{
    timestamps: true
  }
);

module.exports=mongoose.model('Animate', AnimateSchema);