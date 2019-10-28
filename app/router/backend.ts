import { Application } from 'egg';

export default (app: Application) => {
	const { router, controller, middleware } = app;
	const auth = middleware.auth;
	const api = '/api/v1';

	// 用户
	router.get(`${api}/users`, auth(100), controller.backend.user.query);
	router.get(`${api}/users/:id`, auth(100), controller.backend.user.info);
	router.post(`${api}/users`, auth(100), controller.backend.user.create);
	router.put(`${api}/users/:id`, auth(100), controller.backend.user.update);
	router.put(`${api}/users`, auth(100), controller.backend.user.updateMany);
	router.delete(`${api}/users/:id`, auth(100), controller.backend.user.destroy);
	router.delete(`${api}/users`, auth(100), controller.backend.user.destroyMany);

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

	// 文章
	router.get(`${api}/posts`, auth(100), controller.backend.post.query);
	router.get(`${api}/posts/:id`, auth(100), controller.backend.post.info);
	router.post(`${api}/posts`, auth(100), controller.backend.post.create);
	router.put(`${api}/posts/:id`, auth(100), controller.backend.post.update);
	router.put(`${api}/posts`, auth(100), controller.backend.post.updateMany);
	router.delete(`${api}/posts/:id`, auth(100), controller.backend.post.destroy);
	router.delete(`${api}/posts`, auth(100), controller.backend.post.destroyMany);

	// 分类
	router.get(`${api}/category`, auth(100), controller.backend.category.query);
	router.get(`${api}/category/:id`, auth(100), controller.backend.category.info);
	router.post(`${api}/category`, auth(100), controller.backend.category.create);
	router.put(`${api}/category/:id`, auth(100), controller.backend.category.update);
	router.put(`${api}/category`, auth(100), controller.backend.category.updateMany);
	router.delete(`${api}/category/:id`, auth(100), controller.backend.category.destroy);
	router.delete(`${api}/category`, auth(100), controller.backend.category.destroyMany);

	// 配置
	router.get(`${api}/config`, auth(100), controller.backend.config.query);
	router.post(`${api}/config`, auth(100), controller.backend.config.create);
};
