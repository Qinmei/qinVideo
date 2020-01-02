export default {
    schedule: {
        interval: '15m', // 1 分钟间隔
        type: 'all', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
        await ctx.model.Key.updateMany({ expired: { $lt: 900 } }, { $set: { expired: Number(0), status: 'reject' } });
    },
};
