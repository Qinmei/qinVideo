/*
* @ author sessionboy 
* @ github https://github.com/sessionboy
* @ website http://sinn.boyagirl.com
* @ use 统一try catch处理中间件
* @ 用于捕获内部错误，输出日志信息
*/ 
const tracer = require('tracer');
const logger = tracer.colorConsole({
  level: 'error',
  format: '{{timestamp}} <{{title}}> {{file}}(#{{line}}): {{message}}',
  file: 'error.log',
  path: __dirname
});

module.exports = async (ctx,next)=>{
  try{
    await next();
  } catch (err){
    if (!err) {
      return ctx.error({ msg:new Error('未知错误!') });
    } 
    if (typeof(err)=='string') {
      return ctx.error({ msg:new Error(err) });
    }
    logger.error(err.stack);
    ctx.error({error: err.message, status: ctx.status});
  }
}