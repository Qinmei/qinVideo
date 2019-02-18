const router = require('koa-router')();
const { version } = require('../config');
const  { 
  animateController,
  commentController,
  configController,
  postController,
  reportController,
  userController
} =  require('../controllers/index');

router 
  // 基础服务


  // animate
  .get(`/${version}/animate`,animateController.animate_query)
  .post(`/${version}/animate`,animateController.animate_post)
  .get(`/${version}/animate/:slug`,animateController.animate_get)
  .put(`/${version}/animate/:slug`,animateController.animate_put)
  .delete(`/${version}/animate/:slug`,animateController.animate_delete)

  // post
  .get(`/${version}/post`,postController.post_query)
  .post(`/${version}/post`,postController.post_post)
  .get(`/${version}/post/:slug`,postController.post_get)
  .put(`/${version}/post/:slug`,postController.post_put)
  .delete(`/${version}/post/:slug`,postController.post_delete)

  // comment
  .get(`/${version}/comment`,commentController.comment_query)
  .post(`/${version}/comment`,commentController.comment_post)
  .get(`/${version}/comment/:id`,commentController.comment_get)
  .put(`/${version}/comment/:id`,commentController.comment_put)
  .delete(`/${version}/comment/:id`,commentController.comment_delete)

  // config
  .get(`/${version}/config`,configController.config_get)
  .put(`/${version}/config`,configController.config_put)

  // report
  .get(`/${version}/report`,reportController.report_query)
  .post(`/${version}/report`,reportController.report_post)
  .get(`/${version}/report/:id`,reportController.report_get)
  .put(`/${version}/report/:id`,reportController.report_put)
  .delete(`/${version}/report/:id`,reportController.report_delete)

  // user
  .get(`/${version}/user`,userController.user_query)
  .post(`/${version}/user`,userController.user_post)
  .get(`/${version}/user/:slug`,userController.user_get)
  .put(`/${version}/user/:slug`,userController.user_put)
  .delete(`/${version}/user/:slug`,userController.user_delete)


;
module.exports = router;