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

	// 评论
	router.get(`${api}/comments`, auth(100), controller.backend.category.query);
	router.get(`${api}/comments/:id`, auth(100), controller.backend.category.info);
	router.post(`${api}/comments`, auth(100), controller.backend.category.create);
	router.put(`${api}/comments/:id`, auth(100), controller.backend.category.update);
	router.put(`${api}/comments`, auth(100), controller.backend.category.updateMany);
	router.delete(`${api}/comments/:id`, auth(100), controller.backend.category.destroy);
	router.delete(`${api}/comments`, auth(100), controller.backend.category.destroyMany);

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

	// 配置
	router.get(`${api}/config`, auth(100), controller.backend.config.query);
	router.post(`${api}/config`, auth(100), controller.backend.config.create);
};
