module.exports = level => {
  return async (ctx, next) => {
    const token = ctx.header.token;
    if (token) {
      const userInfo = await ctx.service.user.auth(token);

      if (userInfo) {
        ctx.state.user = userInfo;
      } else {
        ctx.state.user = {
          host: null,
          level: 0
        };
      }
    } else {
      ctx.state.user = {
        host: null,
        level: 0
      };
    }

    if (ctx.state.user.level >= level) {
      await next();
    } else {
      return ctx.helper.error(10003);
    }
  };
};
