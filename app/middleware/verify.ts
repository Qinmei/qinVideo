export default () => {
    return async (ctx, next) => {
        const configInfo = await ctx.service.config.cacheInfo();

        if (configInfo.userVerify && ctx.state.user.level > 0 && ctx.state.user.status !== 'publish') {
            if (ctx.state.user.status === 'draft') {
                return ctx.helper.error(10015);
            } else {
                return ctx.helper.error(10017);
            }
        } else {
            await next();
        }
    };
};
