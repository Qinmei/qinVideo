const Router = require('koa-router');
const  { 
  animateController,
  commentController,
  configController,
  postController,
  reportController,
  userController,
  baseController,
  categoryController
} =  require('../controllers/index');
const auth = require('../middleware/authRouter');

const { version } = require('../config');
const router = new Router({
  prefix: `/${version}`
})

router 
  // 基础服务
  .post('/auth/login',auth(false),baseController.login)
  .post('/auth/register',auth(false),baseController.register)
  .post('/auth/refreshtoken',auth(false),baseController.refreshtoken)
  .post('/upload',auth(false),baseController.upload)

  // animate
  .get('/animate',auth(false),animateController.animate_query)
  .post('/animate',auth(true),animateController.animate_post)
  .get('/animate/:slug',auth(false),animateController.animate_get)
  .put('/animate/:slug',auth(true),animateController.animate_put)
  .delete('/animate/:slug',auth(true),animateController.animate_delete)

  // post
  .get('/post',auth(false),postController.post_query)
  .post('/post',auth(true),postController.post_post)
  .get('/post/:slug',auth(false),postController.post_get)
  .put('/post/:slug',auth(true),postController.post_put)
  .delete('/post/:slug',auth(true),postController.post_delete)

  // comment
  .get('/comment',auth(false),commentController.comment_query)
  .post('/comment',auth(true),commentController.comment_post)
  .get('/comment/:id',auth(false),commentController.comment_get)
  .put('/comment/:id',auth(true),commentController.comment_put)
  .delete('/comment/:id',auth(true),commentController.comment_delete)

  // config
  .get('/config',auth(false),configController.config_get)
  .put('/config',auth(true),configController.config_put)

  // report
  .get('/report',auth(true),reportController.report_query)
  .post('/report',auth(true),reportController.report_post)
  .get('/report/:id',auth(true),reportController.report_get)
  .put('/report/:id',auth(true),reportController.report_put)
  .delete('/report/:id',auth(true),reportController.report_delete)

  // user
  .get('/user',auth(true),userController.user_query)
  .get('/user/:slug',auth(false),userController.user_get)
  .put('/user/:slug',auth(true),userController.user_put)
  .delete('/user/:slug',auth(true),userController.user_delete)
  
  // category
  .get('/category',auth(false),categoryController.category_query)
  .post('/category',auth(true),categoryController.category_post)
  .get('/category/:slug',auth(false),categoryController.category_get)
  .put('/category/:slug',auth(true),categoryController.category_put)
  .delete('/category/:slug',auth(true),categoryController.category_delete)


module.exports = router;