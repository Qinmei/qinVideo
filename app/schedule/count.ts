export default {
    schedule: {
        cron: '0 30 3 * * *',
        type: 'all', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
        await ctx.service.count.syncEposide();
        await ctx.service.count.syncAnimate();
        await ctx.service.count.syncComic();
        await ctx.service.count.syncPost();
    },
};
