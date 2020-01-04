import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller, middleware } = app;
    const auth = middleware.auth;
    const api = '/api/v1';

    // 视频
    router.get(`${api}/animates`, auth(100), controller.backend.animate.query);
    router.get(`${api}/animates/:id`, auth(100), controller.backend.animate.info);
    router.post(`${api}/animates`, auth(100), controller.backend.animate.create);
    router.put(`${api}/animates/:id`, auth(100), controller.backend.animate.update);
    router.put(`${api}/animates`, auth(100), controller.backend.animate.updateMany);
    router.delete(`${api}/animates/:id`, auth(100), controller.backend.animate.destroy);
    router.delete(`${api}/animates`, auth(100), controller.backend.animate.destroyMany);

    // 漫画
    router.get(`${api}/comics`, auth(100), controller.backend.comic.query);
    router.get(`${api}/comics/:id`, auth(100), controller.backend.comic.info);
    router.post(`${api}/comics`, auth(100), controller.backend.comic.create);
    router.put(`${api}/comics/:id`, auth(100), controller.backend.comic.update);
    router.put(`${api}/comics`, auth(100), controller.backend.comic.updateMany);
    router.delete(`${api}/comics/:id`, auth(100), controller.backend.comic.destroy);
    router.delete(`${api}/comics`, auth(100), controller.backend.comic.destroyMany);

    // 季数
    router.get(`${api}/seasons`, auth(100), controller.backend.season.query);
    router.get(`${api}/seasons/:id`, auth(100), controller.backend.season.info);
    router.post(`${api}/seasons`, auth(100), controller.backend.season.create);
    router.put(`${api}/seasons/:id`, auth(100), controller.backend.season.update);
    router.put(`${api}/seasons`, auth(100), controller.backend.season.updateMany);
    router.delete(`${api}/seasons/:id`, auth(100), controller.backend.season.destroy);
    router.delete(`${api}/seasons`, auth(100), controller.backend.season.destroyMany);

    // 剧集
    router.get(`${api}/eposides`, auth(100), controller.backend.eposide.query);
    router.get(`${api}/eposides/:id`, auth(100), controller.backend.eposide.info);
    router.post(`${api}/eposides`, auth(100), controller.backend.eposide.create);
    router.put(`${api}/eposides/:id`, auth(100), controller.backend.eposide.update);
    router.put(`${api}/eposides`, auth(100), controller.backend.eposide.updateMany);
    router.delete(`${api}/eposides/:id`, auth(100), controller.backend.eposide.destroy);
    router.delete(`${api}/eposides`, auth(100), controller.backend.eposide.destroyMany);

    // 文章
    router.get(`${api}/posts`, auth(100), controller.backend.post.query);
    router.get(`${api}/posts/:id`, auth(100), controller.backend.post.info);
    router.post(`${api}/posts`, auth(100), controller.backend.post.create);
    router.put(`${api}/posts/:id`, auth(100), controller.backend.post.update);
    router.put(`${api}/posts`, auth(100), controller.backend.post.updateMany);
    router.delete(`${api}/posts/:id`, auth(100), controller.backend.post.destroy);
    router.delete(`${api}/posts`, auth(100), controller.backend.post.destroyMany);

    // 轻博客
    router.get(`${api}/blogs`, auth(100), controller.backend.blog.query);
    router.get(`${api}/blogs/:id`, auth(100), controller.backend.blog.info);
    router.post(`${api}/blogs`, auth(100), controller.backend.blog.create);
    router.put(`${api}/blogs/:id`, auth(100), controller.backend.blog.update);
    router.put(`${api}/blogs`, auth(100), controller.backend.blog.updateMany);
    router.delete(`${api}/blogs/:id`, auth(100), controller.backend.blog.destroy);
    router.delete(`${api}/blogs`, auth(100), controller.backend.blog.destroyMany);

    // 分类
    router.get(`${api}/category`, auth(100), controller.backend.category.query);
    router.get(`${api}/category/:id`, auth(100), controller.backend.category.info);
    router.post(`${api}/category`, auth(100), controller.backend.category.create);
    router.put(`${api}/category/:id`, auth(100), controller.backend.category.update);
    router.put(`${api}/category`, auth(100), controller.backend.category.updateMany);
    router.delete(`${api}/category/:id`, auth(100), controller.backend.category.destroy);
    router.delete(`${api}/category`, auth(100), controller.backend.category.destroyMany);

    // 用户
    router.get(`${api}/users`, auth(100), controller.backend.user.query);
    router.get(`${api}/users/:id`, auth(100), controller.backend.user.info);
    router.post(`${api}/users`, auth(100), controller.backend.user.create);
    router.put(`${api}/users/:id`, auth(100), controller.backend.user.update);
    router.put(`${api}/users`, auth(100), controller.backend.user.updateMany);
    router.delete(`${api}/users/:id`, auth(100), controller.backend.user.destroy);
    router.delete(`${api}/users`, auth(100), controller.backend.user.destroyMany);

    // 商品
    router.get(`${api}/shop`, auth(100), controller.backend.shop.query);
    router.get(`${api}/shop/:id`, auth(100), controller.backend.shop.info);
    router.post(`${api}/shop`, auth(100), controller.backend.shop.create);
    router.put(`${api}/shop/:id`, auth(100), controller.backend.shop.update);
    router.put(`${api}/shop`, auth(100), controller.backend.shop.updateMany);
    router.delete(`${api}/shop/:id`, auth(100), controller.backend.shop.destroy);
    router.delete(`${api}/shop`, auth(100), controller.backend.shop.destroyMany);

    // 激活码
    router.get(`${api}/key`, auth(100), controller.backend.key.query);
    router.get(`${api}/key/:id`, auth(100), controller.backend.key.info);
    router.post(`${api}/key`, auth(100), controller.backend.key.create);
    router.put(`${api}/key/:id`, auth(100), controller.backend.key.update);
    router.put(`${api}/key`, auth(100), controller.backend.key.updateMany);
    router.delete(`${api}/key/:id`, auth(100), controller.backend.key.destroy);
    router.delete(`${api}/key`, auth(100), controller.backend.key.destroyMany);

    // 订单
    router.get(`${api}/order`, auth(100), controller.backend.order.query);
    router.get(`${api}/order/:id`, auth(100), controller.backend.order.info);
    router.post(`${api}/order`, auth(100), controller.backend.order.create);
    router.delete(`${api}/order/:id`, auth(100), controller.backend.order.destroy);
    router.delete(`${api}/order`, auth(100), controller.backend.order.destroyMany);

    // 评论
    router.get(`${api}/comments`, auth(100), controller.backend.comment.query);
    router.get(`${api}/comments/:id`, auth(100), controller.backend.comment.info);
    router.post(`${api}/comments`, auth(100), controller.backend.comment.create);
    router.put(`${api}/comments/:id`, auth(100), controller.backend.comment.update);
    router.put(`${api}/comments`, auth(100), controller.backend.comment.updateMany);
    router.delete(`${api}/comments/:id`, auth(100), controller.backend.comment.destroy);
    router.delete(`${api}/comments`, auth(100), controller.backend.comment.destroyMany);

    // 评分
    router.get(`${api}/rates`, auth(100), controller.backend.rate.query);
    router.get(`${api}/rates/:id`, auth(100), controller.backend.rate.info);
    router.post(`${api}/rates`, auth(100), controller.backend.rate.create);
    router.put(`${api}/rates/:id`, auth(100), controller.backend.rate.update);
    router.put(`${api}/rates`, auth(100), controller.backend.rate.updateMany);
    router.delete(`${api}/rates/:id`, auth(100), controller.backend.rate.destroy);
    router.delete(`${api}/rates`, auth(100), controller.backend.rate.destroyMany);

    // 弹幕
    router.get(`${api}/danmus`, auth(100), controller.backend.danmu.query);
    router.get(`${api}/danmus/:id`, auth(100), controller.backend.danmu.info);
    router.post(`${api}/danmus`, auth(100), controller.backend.danmu.create);
    router.put(`${api}/danmus/:id`, auth(100), controller.backend.danmu.update);
    router.put(`${api}/danmus`, auth(100), controller.backend.danmu.updateMany);
    router.delete(`${api}/danmus/:id`, auth(100), controller.backend.danmu.destroy);
    router.delete(`${api}/danmus`, auth(100), controller.backend.danmu.destroyMany);

    // 举报
    router.get(`${api}/reports`, auth(100), controller.backend.report.query);
    router.get(`${api}/reports/:id`, auth(100), controller.backend.report.info);
    router.post(`${api}/reports`, auth(100), controller.backend.report.create);
    router.put(`${api}/reports/:id`, auth(100), controller.backend.report.update);
    router.put(`${api}/reports`, auth(100), controller.backend.report.updateMany);
    router.delete(`${api}/reports/:id`, auth(100), controller.backend.report.destroy);
    router.delete(`${api}/reports`, auth(100), controller.backend.report.destroyMany);

    // 配置
    router.get(`${api}/config`, auth(100), controller.backend.config.query);
    router.post(`${api}/config`, auth(100), controller.backend.config.create);

    // 文件相关
    router.post(`${api}/upload/image`, auth(100), controller.backend.uploads.uploadImg);
    router.get(`${api}/image/:type`, auth(100), controller.backend.uploads.queryImg);
    router.delete(`${api}/image`, auth(100), controller.backend.uploads.deleteImg);

    // 记录
    router.get(`${api}/data/all`, auth(100), controller.backend.data.query);
    router.get(`${api}/data/today`, auth(100), controller.backend.data.todayData);
    router.get(`${api}/data/search`, auth(100), controller.backend.data.search);
    router.get(`${api}/data/work`, auth(100), controller.backend.data.workData);
    router.get(`${api}/data/sort`, auth(0), controller.backend.data.activeSort);

    // 工具
    router.post(`${api}/tools/replace`, auth(100), controller.backend.tools.replace);
    router.post(`${api}/tools/downimg`, auth(100), controller.backend.tools.downImg);
    router.post(`${api}/tools/upload`, auth(100), controller.backend.tools.upload);

    // 资源库
    router.get(`${api}/cloud/list`, auth(100), controller.backend.cloud.query);
    router.get(`${api}/cloud/info`, auth(100), controller.backend.cloud.info);
    router.post(`${api}/cloud/info`, auth(100), controller.backend.cloud.update);
    router.post(`${api}/cloud/save`, auth(100), controller.backend.cloud.save);
    router.post(`${api}/cloud/import`, auth(100), controller.backend.cloud.import);
};
