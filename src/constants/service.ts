export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum RequestUrls {
  login = "/auth/login",
  baseInfo = "/auth/info",
  register = "/auth/register",
  refreshToken = "/auth/refresh",
  resetPasswordMail = "/auth/send",
  resetPasswordAuth = "/auth/reset",
  verifyCode = "/auth/verify",

  // base
  queryMobile = "/mobile",
  postRate = "/rate",

  // 视频
  queryAnimate = "/animates",
  getAnimateInfo = "/animates/:slug",
  getAnimatePlayInfo = "/animates/:id/play",
  getAnimateRelative = "/animates/:id/relative",

  // 漫画
  queryComic = "/comics",
  getComicInfo = "/comics/:slug",
  getComicPlayInfo = "/comics/:id/play",
  getComicRelative = "/comics/:id/relative",

  // 文章
  queryPost = "/posts",
  getPostInfo = "/posts/:slug",
  getPostRelative = "/posts/:id/relative",

  // 评论
  queryComment = "/comments",
  postComment = "/comments",
  getComment = "/comments/:id",

  // 弹幕
  queryDanmu = "/danmus",
  postReport = "/reports",

  // 分类
  getCategoryInfo = "/category/id/:id",
  queryCategory = "/category/type/:type",

  // 商品
  queryShop = "/shop",

  // 用户
  getUserInfo = "/user/:id",
  getUserBase = "/user/:id/base",
  getUserOwn = "/user/:id/own/:type",
  getUserLike = "/user/like/:type",
  getUserHistory = "/user/history/:type",
  userEdit = "/user/edit",
  userAction = "/user/action",
  userPay = "/user/pay",
  userOrder = "/user/order",
  getUserOrder = "/user/order/list",
}
