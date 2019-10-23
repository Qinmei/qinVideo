import { Application } from 'egg';

export default (app: Application) => {
	const { router, controller, middleware } = app;
	const auth = middleware.auth;
	const api = '/api/v1';

	// 用户
	router.get(`${api}/users`, auth(0), controller.backend.user.query);
	router.get(`${api}/users/:id`, auth(0), controller.backend.user.info);
	router.post(`${api}/users`, auth(0), controller.backend.user.create);
	router.put(`${api}/users/:id`, auth(0), controller.backend.user.update);
	router.put(`${api}/users`, auth(0), controller.backend.user.updateMany);
	router.delete(`${api}/users/:id`, auth(0), controller.backend.user.destroy);
	router.delete(`${api}/users`, auth(0), controller.backend.user.destroyMany);

	// 视频
	router.get(`${api}/animates`, auth(0), controller.backend.animate.query);
	router.get(`${api}/animates/:id`, auth(0), controller.backend.animate.info);
	router.post(`${api}/animates`, auth(0), controller.backend.animate.create);
	router.put(`${api}/animates/:id`, auth(0), controller.backend.animate.update);
	router.put(`${api}/animates`, auth(0), controller.backend.animate.updateMany);
	router.delete(`${api}/animates/:id`, auth(0), controller.backend.animate.destroy);
	router.delete(`${api}/animates`, auth(0), controller.backend.animate.destroyMany);

	//漫画
	router.get(`${api}/comics`, auth(0), controller.backend.comic.query);
	router.get(`${api}/comics/:id`, auth(0), controller.backend.comic.info);
	router.post(`${api}/comics`, auth(0), controller.backend.comic.create);
	router.put(`${api}/comics/:id`, auth(0), controller.backend.comic.update);
	router.put(`${api}/comics`, auth(0), controller.backend.comic.updateMany);
	router.delete(`${api}/comics/:id`, auth(0), controller.backend.comic.destroy);
	router.delete(`${api}/comics`, auth(0), controller.backend.comic.destroyMany);

	// 配置
	router.get(`${api}/config`, auth(0), controller.backend.config.query);
	router.post(`${api}/config`, auth(0), controller.backend.config.create);
};
