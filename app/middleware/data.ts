'use strict';
module.exports = () => {
  return async (ctx, next) => {
    const host = ctx.host;
    const url = ctx.request.url;
    const ip = ctx.ip;
    const token = ctx.header.token;

    await ctx.service.data.create({ host, url, ip, token });
    await next();
  };
};
