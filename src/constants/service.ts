export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum RequestUrls {
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

  // 视频
  queryAnimate = "/api/v1/animates",
  exactAnimate = "/api/v1/animates/:slug",

  // 漫画
  queryComic = "/api/v1/comics",
  exactComic = "/api/v1/comics/:slug",

  // 季数
  querySeason = "/api/v1/seasons",
  exactSeason = "/api/v1/seasons/:id",

  // 剧集
  queryEposide = "/api/v1/eposides",
  exactEposide = "/api/v1/eposides/:id",

  // 文章
  queryPost = "/api/v1/posts",
  exactPost = "/api/v1/posts/:slug",

  // 轻博客
  queryBlog = "/api/v1/blogs",
  exactBlog = "/api/v1/blogs/:id",

  // 评论
  queryComment = "/api/v1/comments",
  exactComment = "/api/v1/comments/:id",

  // 评分
  queryRate = "/api/v1/rates",
  exactRate = "/api/v1/rates/:id",

  // 弹幕
  queryDanmu = "/api/v1/danmus",
  exactDanmu = "/api/v1/danmus/:id",

  // 举报
  queryReport = "/api/v1/reports",
  exactReport = "/api/v1/reports/:id",

  // 用户
  queryUser = "/api/v1/users",
  exactUser = "/api/v1/users/:slug",

  // 分类
  queryCategory = "/api/v1/category",
  exactCategory = "/api/v1/category/:id",

  // 商品
  queryShop = "/api/v1/shop",
  exactShop = "/api/v1/shop/:id",

  // 订单
  queryOrder = "/api/v1/order",
  exactOrder = "/api/v1/order/:id",

  // 激活码
  queryKey = "/api/v1/key",
  exactKey = "/api/v1/key/:id",

  // 图片
  exactImage = "/api/v1/image/:type",
  queryImage = "/api/v1/image",

  // 工具
  otherToolsReplace = "/api/v1/tools/replace",
  otherToolsDownImg = "/api/v1/tools/downimg",
  otherToolsUpload = "/api/v1/tools/upload",

  // 资源
  queryCloud = "/api/v1/clouds",
  exactCloud = "/api/v1/clouds/:id",
  otherCloudSave = "/api/v1/clouds/save",

  // 来源
  querySource = "/api/v1/sources",
  exactSource = "/api/v1/sources/:id",
  sourceImport = "/api/v1/sources/import",

  // 操作记录
  queryRecord = "/api/v1/records",
  exactRecord = "/api/v1/records/:id",
}
