import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller, middleware } = app;
    const auth = middleware.auth;
    const verify = middleware.verify;
    const log = middleware.log;
    const api = '/api/v2';

    // special

    router.get(`${api}/test`, log(), auth(0), controller.frontend.common.test);

    // base
    router.post(`${api}/reports`, log(), log(), auth(1), controller.frontend.common.report);
    router.post(`${api}/uploads`, log(), auth(1), controller.frontend.common.upload);
    router.get(`${api}/category/type/:type`, log(), auth(0), controller.frontend.common.category);
    router.get(`${api}/category/id/:id`, log(), auth(0), controller.frontend.common.cateInfo);
    router.get(`${api}/shop`, log(), auth(0), controller.frontend.common.shop);
    router.get(`${api}/config`, log(), auth(0), controller.frontend.config.info);
    router.get(`${api}/home`, log(), auth(0), controller.frontend.config.home);
    router.get(`${api}/mobile`, log(), auth(0), controller.frontend.config.mobile);
    router.get(`${api}/appinfo`, log(), auth(0), controller.frontend.config.appInfo);
    router.post(`${api}/rate`, log(), auth(1), controller.frontend.common.rate);

    // auth
    router.get(`${api}/auth/info`, log(), auth(0), controller.frontend.auth.info);
    router.post(`${api}/auth/login`, log('login'), auth(0), controller.frontend.auth.login);
    router.post(`${api}/auth/register`, log('register'), auth(0), controller.frontend.auth.register);
    router.post(`${api}/auth/refresh`, log(), auth(0), controller.frontend.auth.refreshtoken);
    router.post(`${api}/auth/send`, log('email'), auth(0), controller.frontend.auth.resetPasswordMail);
    router.post(`${api}/auth/reset`, log('reset'), auth(0), controller.frontend.auth.resetPasswordAuth);
    router.get(`${api}/auth/verify`, log(), auth(1), controller.frontend.auth.sendVerifyCode);
    router.post(`${api}/auth/verify`, log('verify'), auth(0), controller.frontend.auth.authVerifyCode);

    // user
    router.get(`${api}/user/:id`, log(), auth(0), controller.frontend.user.info);
    router.get(`${api}/user/:id/base`, log(), auth(0), controller.frontend.user.baseInfo);
    router.get(`${api}/user/:id/own/:type`, log(), auth(0), controller.frontend.user.own);
    router.get(`${api}/user/like/:type`, log(), auth(1), controller.frontend.user.like);
    router.get(`${api}/user/history/:type`, log(), auth(1), controller.frontend.user.history);
    router.get(`${api}/user/order/list`, log(), auth(1), controller.frontend.user.orderList);
    router.post(`${api}/user/action`, log(), auth(1), controller.frontend.user.relation);
    router.post(`${api}/user/edit`, log(), auth(1), controller.frontend.user.edit);
    router.post(`${api}/user/pay`, log('key'), auth(1), controller.frontend.user.pay);
    router.post(`${api}/user/order`, log('order'), auth(1), controller.frontend.user.order);

    // animate
    router.get(`${api}/animates`, log('search'), auth(0), controller.frontend.animate.query);
    router.get(`${api}/animates/:id`, log('animate'), auth(0), controller.frontend.animate.info);
    router.get(`${api}/animates/:id/relative`, log(), auth(0), controller.frontend.animate.relative);
    router.get(`${api}/animates/:id/play`, log('play'), auth(0), controller.frontend.animate.play);

    // danmu
    router.get(`${api}/danmus`, log(), auth(0), controller.frontend.danmu.query);
    router.post(`${api}/danmus`, log('danmu'), auth(0), verify(), controller.frontend.danmu.create);

    // comic
    router.get(`${api}/comics`, log('search'), auth(0), controller.frontend.comic.query);
    router.get(`${api}/comics/:id`, log('comic'), auth(0), controller.frontend.comic.info);
    router.get(`${api}/comics/:id/relative`, log(), auth(0), controller.frontend.comic.relative);
    router.get(`${api}/comics/:id/play`, log('read'), auth(0), controller.frontend.comic.play);

    // comment
    router.get(`${api}/comments`, log(), auth(0), controller.frontend.comment.query);
    router.get(`${api}/comments/:id`, log(), auth(0), controller.frontend.comment.info);
    router.post(`${api}/comments`, log('comment'), auth(1), verify(), controller.frontend.comment.create);
    router.delete(`${api}/comments/:id`, log(), auth(1), controller.frontend.comment.destroy);

    // blog
    router.get(`${api}/blogs`, log(), auth(0), controller.frontend.blog.query);
    router.get(`${api}/blogs/:id`, log(), auth(0), controller.frontend.blog.info);
    router.post(`${api}/blogs`, log('blog'), auth(1), controller.frontend.blog.create);
    router.delete(`${api}/blogs/:id`, log(), auth(1), controller.frontend.blog.destroy);

    // post
    router.get(`${api}/posts`, log('search'), auth(0), controller.frontend.post.query);
    router.get(`${api}/posts/:id`, log('post'), auth(0), controller.frontend.post.info);
    router.get(`${api}/posts/:id/relative`, log(), auth(0), controller.frontend.post.relative);
};
