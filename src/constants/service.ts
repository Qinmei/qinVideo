export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum Urls {
  queryAuthLogin = "/api/v2/auth/login",
  queryAuthToken = "/api/v2/auth/refreshtoken",

  // 数据
  queryDataAll = "/api/v1/data/all",
  queryDataToday = "/api/v1/data/today",
  queryDataSearch = "/api/v1/data/search",
  queryDataWork = "/api/v1/data/work",
  queryDataSort = "/api/v1/data/sort",

  // 配置
  queryBaseConfig = "/api/v1/config",
  queryBaseInit = "/api/v1/init",
  queryMessage = "/api/v2/messages",

  // 视频
  queryAnimate = "/api/v1/animates",
  singleAnimate = "/api/v1/animates/:id",

  // 漫画
  queryComic = "/api/v1/comics",
  singleComic = "/api/v1/comics/:id",

  // 季数
  querySeason = "/api/v1/seasons",
  singleSeason = "/api/v1/seasons/:id",

  // 剧集
  queryEposide = "/api/v1/eposides",
  singleEposide = "/api/v1/eposides/:id",

  // 文章
  queryPost = "/api/v1/posts",
  singlePost = "/api/v1/posts/:id",

  // 轻博客
  queryBlog = "/api/v1/blogs",
  singleBlog = "/api/v1/blogs/:id",

  // 评论
  queryComment = "/api/v1/comments",
  singleComment = "/api/v1/comments/:id",

  // 评分
  queryRate = "/api/v1/rates",
  singleRate = "/api/v1/rates/:id",

  // 弹幕
  queryDanmu = "/api/v1/danmus",
  singleDanmu = "/api/v1/danmus/:id",

  // 举报
  queryReport = "/api/v1/reports",
  singleReport = "/api/v1/reports/:id",

  // 用户
  queryUser = "/api/v1/users",
  singleUser = "/api/v1/users/:slug",

  // 分类
  queryCategory = "/api/v1/category",
  singleCategory = "/api/v1/category/:id",
  queryCategoryType = "/api/v1/category/query/:type",

  // 商品
  queryShop = "/api/v1/shop",
  singleShop = "/api/v1/shop/:id",

  // 订单
  queryOrder = "/api/v1/order",
  singleOrder = "/api/v1/order/:id",

  // 激活码
  queryKey = "/api/v1/key",
  singleKey = "/api/v1/key/:id",

  // 图片
  singleImage = "/api/v1/image/:type",
  queryImage = "/api/v1/image",

  // 工具
  otherToolsReplace = "/api/v1/tools/replace",
  otherToolsDownImg = "/api/v1/tools/downimg",
  otherToolsUpload = "/api/v1/tools/upload",

  // 资源
  queryCloud = "/api/v1/clouds",
  singleCloud = "/api/v1/clouds/:id",
  otherCloudSave = "/api/v1/clouds/save",

  // 来源
  querySource = "/api/v1/sources",
  singleSource = "/api/v1/sources/:id",
  sourceImport = "/api/v1/sources/import",

  // 操作记录
  queryRecord = "/api/v1/records",
  singleRecord = "/api/v1/records/:id",
}
