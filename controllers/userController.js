class userController {

  // 登录页渲染
  static async Index(ctx) {
    ctx.send({
      status:'success',
      data:'hello'
    })
  }

}

module.exports = userController;