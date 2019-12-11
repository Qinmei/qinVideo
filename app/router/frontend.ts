import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller, middleware } = app;
    const auth = middleware.auth;
    const api = '/api/v2';

    // base
    router.get(`${api}/config`, auth(0), controller.frontend.config.info);
    router.get(`${api}/search`, auth(0), controller.frontend.data.query);

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

    // comic
    router.get(`${api}/comics`, auth(0), controller.frontend.comic.query);
    router.get(`${api}/comics/:id`, auth(0), controller.frontend.comic.info);
};
