export default {
  schedule: {
    interval: '15m', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    await ctx.model.User.updateMany(
      { expired: { $gte: 900 }, level: { $lte: 99 } },
      { $inc: { expired: -900 } },
    );
    await ctx.model.User.updateMany(
      { expired: { $lt: 900 }, level: { $lte: 99 } },
      { $set: { expired: Number(0), level: Number(1) } },
    );
  },
};
