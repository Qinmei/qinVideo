const Router = require("koa-router");
const {
  animateController,
  commentController,
  configController,
  postController,
  reportController,
  userController,
  baseController,
  categoryController,
  danmuController,
  dataController,
  orderController,
  shopController,
  keyController,
  comicController
} = require("../controllers/index");
const auth = require("../middleware/authRouter");

const { version } = require("../../config");
const router = new Router({
  prefix: `/${version}`
});

router
  // 基础服务
  .post("/auth/login", auth(0), baseController.login)
  .post("/auth/register", auth(0), baseController.register)
  .post("/auth/refreshtoken", auth(0), baseController.refreshtoken)
  .post("/auth/resetPasswordMail", auth(0), baseController.resetPasswordMail)
  .post("/auth/resetPasswordAuth", auth(0), baseController.resetPasswordAuth)
  .post("/upload", auth(1), baseController.upload)
  .get("/image/:type", auth(100), baseController.image_query)
  .delete("/image", auth(100), baseController.image_delete)
  .post("/money", auth(1), baseController.useKey)
  .get("/search", auth(0), baseController.search_word)

  // config
  .get("/config", auth(100), configController.config_get)
  .post("/config", auth(100), configController.config_post)

  // animate
  .get("/animate", auth(0), animateController.animate_query)
  .post("/animate", auth(1), animateController.animate_post)
  .post("/animate/play", auth(0), animateController.animate_play)
  .get("/animate/slug/:slug", auth(0), animateController.animate_get)
  .put("/animate/slug/:slug", auth(1), animateController.animate_put)
  .delete("/animate/slug/:slug", auth(100), animateController.animate_delete)
  .put("/animate/batch", auth(100), animateController.animate_put_batch)
  .delete("/animate/batch", auth(100), animateController.animate_delete_batch)

  // comic
  .get("/comic", auth(0), comicController.comic_query)
  .post("/comic", auth(1), comicController.comic_post)
  .post("/comic/play", auth(0), comicController.comic_play)
  .get("/comic/slug/:slug", auth(0), comicController.comic_get)
  .put("/comic/slug/:slug", auth(1), comicController.comic_put)
  .delete("/comic/slug/:slug", auth(100), comicController.comic_delete)
  .put("/comic/batch", auth(100), comicController.comic_put_batch)
  .delete("/comic/batch", auth(100), comicController.comic_delete_batch)

  // post
  .get("/post", auth(0), postController.post_query)
  .post("/post", auth(1), postController.post_post)
  .get("/post/slug/:slug", auth(0), postController.post_get)
  .put("/post/slug/:slug", auth(1), postController.post_put)
  .delete("/post/slug/:slug", auth(100), postController.post_delete)
  .put("/post/batch", auth(100), postController.post_put_batch)
  .delete("/post/batch", auth(100), postController.post_delete_batch)

  // comment
  .get("/comment", auth(0), commentController.comment_query)
  .get("/comment/id/:id", auth(0), commentController.comment_get)
  .post("/comment", auth(1), commentController.comment_post)
  .put("/comment/id/:id", auth(100), commentController.comment_put)
  .delete("/comment/id/:id", auth(1), commentController.comment_delete)
  .put("/comment/batch", auth(100), commentController.comment_put_batch)
  .delete("/comment/batch", auth(100), commentController.comment_delete_batch)

  // report
  .get("/report", auth(100), reportController.report_query)
  .post("/report", auth(1), reportController.report_post)
  .put("/report/id/:id", auth(1), reportController.report_put)
  .delete("/report/id/:id", auth(1), reportController.report_delete)
  .put("/report/batch", auth(100), reportController.report_put_batch)
  .delete("/report/batch", auth(100), reportController.report_delete_batch)

  // user
  .get("/user", auth(100), userController.user_query)
  .post("/user", auth(100), userController.user_post)
  .post("/user/action", auth(1), userController.user_action)
  .get("/user/slug/:slug", auth(0), userController.user_get)
  .put("/user/slug/:slug", auth(1), userController.user_put)
  .delete("/user/slug/:slug", auth(100), userController.user_delete)
  .put("/user/batch", auth(100), userController.user_put_batch)
  .delete("/user/batch", auth(100), userController.user_delete_batch)

  // category
  .get("/category", auth(0), categoryController.category_query)
  .post("/category", auth(1), categoryController.category_post)
  .get("/category/id/:id", auth(0), categoryController.category_get)
  .put("/category/id/:id", auth(1), categoryController.category_put)
  .delete("/category/id/:id", auth(1), categoryController.category_delete)
  .put("/category/batch", auth(1), categoryController.category_put_batch)
  .delete("/category/batch", auth(1), categoryController.category_delete_batch)

  // shop
  .get("/shop", auth(0), shopController.shop_query)
  .post("/shop", auth(100), shopController.shop_post)
  .get("/shop/id/:id", auth(0), shopController.shop_get)
  .put("/shop/id/:id", auth(100), shopController.shop_put)
  .delete("/shop/id/:id", auth(100), shopController.shop_delete)
  .put("/shop/batch", auth(100), shopController.shop_put_batch)
  .delete("/shop/batch", auth(100), shopController.shop_delete_batch)

  // order
  .get("/order", auth(100), orderController.order_query)
  .post("/order", auth(1), orderController.order_post)
  .get("/order/id/:id", auth(100), orderController.order_get)
  .delete("/order/id/:id", auth(100), orderController.order_delete)
  .delete("/order/batch", auth(100), orderController.order_delete_batch)

  // key
  .get("/key", auth(100), keyController.key_query)
  .post("/key", auth(100), keyController.key_post)
  .delete("/key/id/:id", auth(100), keyController.key_delete)
  .delete("/key/batch", auth(100), keyController.key_delete_batch)

  // danmu
  .get("/danmu/list", auth(0), danmuController.danmu_get)
  .get("/danmu", auth(100), danmuController.danmu_query)
  .post("/danmu", auth(0), danmuController.danmu_post)
  .delete("/danmu", auth(100), danmuController.danmu_delete)

  // data
  .get("/data", auth(100), dataController.data_query)
  .post("/data", auth(0), dataController.data_post);

module.exports = router;
