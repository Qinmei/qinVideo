module.exports = async (ctx, next) => {
  ctx.error = ({ data, msg, code }) => {
    ctx.body = { code: code || -200, msg, data };
  };
  ctx.success = ({ data, msg, total }) => {
    ctx.body = { code: 200, msg, total, data };
  };

  ctx.dplayer = ({ data, code }) => {
    ctx.body = { code, data };
  };

  ctx.send = ({ data, total }) => {
    const { code, msg } = data;
    ctx.body = code
      ? {
          code,
          msg
        }
      : {
          data,
          total,
          msg: "成功",
          code: 200
        };
  };
  await next();
};
