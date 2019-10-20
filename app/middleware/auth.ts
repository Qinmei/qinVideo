import * as jwt from "jsonwebtoken";

export default level => {
  return async (ctx, next) => {
    const token = ctx.header.authorization;
    if (token) {
      const { id } = await jwt.verify(token, ctx.app.config.tokenSecret);
      const userInfo = await ctx.service.user.info(id);

      if (userInfo) {
        ctx.state.user = userInfo;
      } else {
        ctx.state.user = {
          name: null,
          level: 0
        };
      }
    } else {
      ctx.state.user = {
        name: null,
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
