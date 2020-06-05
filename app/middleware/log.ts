export default (type?: string) => {
    return async (ctx, next) => {
        ctx.service.data.create('request');
        if (type) {
            const title = ctx?.query?.title || undefined;
            ctx.service.data.create(type, title);
        }

        await next();
    };
};
