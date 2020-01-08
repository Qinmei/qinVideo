import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller, middleware } = app;
    const auth = middleware.auth;
    const api = '/api/v2';

    // base
    router.post(`${api}/reports`, auth(1), controller.frontend.common.report);
    router.post(`${api}/uploads`, auth(1), controller.frontend.common.upload);
    router.get(`${api}/category/type/:type`, auth(0), controller.frontend.common.category);
    router.get(`${api}/category/id/:id`, auth(0), controller.frontend.common.cateInfo);
    router.get(`${api}/shop`, auth(0), controller.frontend.common.shop);
    router.get(`${api}/config`, auth(0), controller.frontend.config.info);
    router.get(`${api}/home`, auth(0), controller.frontend.config.home);
    router.get(`${api}/mobile`, auth(0), controller.frontend.config.mobile);

    // auth
    router.get(`${api}/auth/info`, auth(1), controller.frontend.auth.info);
    router.post(`${api}/auth/login`, auth(0), controller.frontend.auth.login);
    router.post(`${api}/auth/register`, auth(0), controller.frontend.auth.register);
    router.post(`${api}/auth/refresh`, auth(0), controller.frontend.auth.refreshtoken);
    router.post(`${api}/auth/send`, auth(0), controller.frontend.auth.resetPasswordMail);
    router.post(`${api}/auth/reset`, auth(0), controller.frontend.auth.resetPasswordAuth);

    // user
    router.get(`${api}/user/:id`, auth(0), controller.frontend.user.info);
    router.get(`${api}/user/:id/base`, auth(0), controller.frontend.user.baseInfo);
    router.get(`${api}/user/:id/own/:type`, auth(0), controller.frontend.user.own);
    router.get(`${api}/user/like/:type`, auth(1), controller.frontend.user.like);
    router.post(`${api}/user/action`, auth(1), controller.frontend.user.relation);
    router.post(`${api}/user/edit`, auth(1), controller.frontend.user.edit);
    router.post(`${api}/user/pay`, auth(1), controller.frontend.user.pay);
    router.post(`${api}/user/order`, auth(1), controller.frontend.user.order);
    router.post(`${api}/user/history`, auth(1), controller.frontend.user.history);

    // animate
    router.get(`${api}/animates`, auth(0), controller.frontend.animate.query);
    router.get(`${api}/animates/:id`, auth(0), controller.frontend.animate.info);
    router.get(`${api}/animates/:id/relative`, auth(0), controller.frontend.animate.relative);
    router.get(`${api}/animates/:id/play`, auth(0), controller.frontend.animate.play);

    // danmu
    router.get(`${api}/danmus`, auth(0), controller.frontend.danmu.query);
    router.get(`${api}/danmus/v3`, auth(0), controller.frontend.danmu.queryV3);
    router.post(`${api}/danmus`, auth(0), controller.frontend.danmu.create);
    router.post(`${api}/danmus/v3`, auth(0), controller.frontend.danmu.create);

    // comic
    router.get(`${api}/comics`, auth(0), controller.frontend.comic.query);
    router.get(`${api}/comics/:id`, auth(0), controller.frontend.comic.info);
    router.get(`${api}/comics/:id/relative`, auth(0), controller.frontend.comic.relative);
    router.get(`${api}/comics/:id/play`, auth(0), controller.frontend.comic.play);

    // comment
    router.get(`${api}/comments`, auth(0), controller.frontend.comment.query);
    router.get(`${api}/comments/:id`, auth(0), controller.frontend.comment.info);
    router.post(`${api}/comments`, auth(1), controller.frontend.comment.create);
    router.delete(`${api}/comments/:id`, auth(0), controller.frontend.comment.destroy);

    // post
    router.get(`${api}/posts`, auth(0), controller.frontend.post.query);
    router.get(`${api}/posts/:id`, auth(0), controller.frontend.post.info);
    router.get(`${api}/posts/:id/relative`, auth(0), controller.frontend.post.relative);
};
