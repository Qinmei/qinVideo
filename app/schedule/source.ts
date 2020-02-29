export default {
    schedule: {
        cron: '0 0 3 * * *',
        type: 'all', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
        const data = await ctx.model.Source.find({ update: true });
        const dataArr = JSON.parse(JSON.stringify(data));
        if (dataArr.length > 0) {
            for (const item of dataArr) {
                await ctx.service.source.import(item._id, 'day');
            }
        }
    },
};
