import { Application } from "egg";

export default (app: Application) => {
  const { router, controller, middleware } = app;
  const auth = middleware.auth;
  const api = "/api/v1";

  // users
  router.get(`${api}/users`, auth(0), controller.user.query);
  router.get(`${api}/users/:id`, auth(0), controller.user.info);
  router.post(`${api}/users`, auth(0), controller.user.create);
  router.put(`${api}/users/:id`, auth(0), controller.user.update);
  router.put(`${api}/users`, auth(0), controller.user.updateMany);
  router.delete(`${api}/users/:id`, auth(0), controller.user.destroy);
  router.delete(`${api}/users`, auth(0), controller.user.destroyMany);
};
