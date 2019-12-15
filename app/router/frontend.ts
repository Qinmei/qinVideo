import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller, middleware } = app;
    const auth = middleware.auth;
    const api = '/api/v2';

    // base
    router.get(`${api}/config`, auth(0), controller.frontend.config.info);
    router.get(`${api}/search`, auth(0), controller.frontend.data.query);
    router.post(`${api}/reports`, auth(1), controller.frontend.common.report);
    router.post(`${api}/uploads`, auth(1), controller.frontend.common.upload);
    router.get(`${api}/category/type/:type`, auth(0), controller.frontend.common.category);
    router.get(`${api}/category/id/:id`, auth(0), controller.frontend.common.cateInfo);

    // auth
    router.get(`${api}/auth/info`, auth(1), controller.frontend.auth.info);
    router.post(`${api}/auth/login`, auth(0), controller.frontend.auth.login);
    router.post(`${api}/auth/register`, auth(0), controller.frontend.auth.register);
    router.post(`${api}/auth/send`, auth(0), controller.frontend.auth.resetPasswordMail);
    router.post(`${api}/auth/reset`, auth(0), controller.frontend.auth.resetPasswordAuth);

    // user
    router.get(`${api}/user/:id`, auth(0), controller.frontend.user.info);
    router.post(`${api}/user/action`, auth(0), controller.frontend.user.relation);

    // animate
    router.get(`${api}/animates`, auth(0), controller.frontend.animate.query);
    router.get(`${api}/animates/:id`, auth(0), controller.frontend.animate.info);
    router.get(`${api}/animates/relative/:id`, auth(0), controller.frontend.animate.relative);
    router.get(`${api}/animates/play/:id`, auth(0), controller.frontend.animate.play);

    // danmu
    router.get(`${api}/danmus`, auth(0), controller.frontend.danmu.query);
    router.get(`${api}/danmus/v3`, auth(0), controller.frontend.danmu.queryV3);
    router.post(`${api}/danmus`, auth(0), controller.frontend.danmu.create);
    router.post(`${api}/danmus/v3`, auth(0), controller.frontend.danmu.create);

    // comic
    router.get(`${api}/comics`, auth(0), controller.frontend.comic.query);
    router.get(`${api}/comics/:id`, auth(0), controller.frontend.comic.info);

    // 评论
    router.get(`${api}/comments`, auth(1), controller.frontend.comment.query);
    router.get(`${api}/comments/:id`, auth(1), controller.frontend.comment.info);
    router.post(`${api}/comments`, auth(1), controller.frontend.comment.create);
    router.delete(`${api}/comments/:id`, auth(1), controller.frontend.comment.destroy);
};
