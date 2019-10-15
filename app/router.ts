import { Application } from "egg";

export default (app: Application) => {
  const { router, controller, middleware } = app;
  const auth = middleware.auth;
  const backApi = "/api/v1";
  // const fontApi = "/api/v2";

  // user
  router.get(`${backApi}/user`, auth(100), controller.user.list);
};
