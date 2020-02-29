export default {
    schedule: {
        cron: '0 0 4 * * *',
        type: 'all', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
        const data = await ctx.service.config.info();
        const { autoUpdate = false } = data;
        if (autoUpdate) {
            await ctx.service.cloud.autoUpdate();
        }
    },
};
