class userController {

    // 测试
    static async test(ctx) {
        ctx.send({
        status:'success',
        data:'hello'
        })
    }

    // 文件上传
    static async upload(ctx) {
      ctx.send({
        status:'success',
        data:'hello'
      })
    }

  }
  
  module.exports = userController;