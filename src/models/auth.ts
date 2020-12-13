import { Service } from "@/constants";
import { Model } from "@/action/model";
import { InitialState, LoginReq, LoginRes } from "@/types/auth";

export class Auth extends Model<InitialState> {
  constructor() {
    super("auth", {});
  }

  methods = {
    login: (data: LoginReq) =>
      super.init<LoginRes>(Service.Methods.POST, Service.Urls.queryAuthLogin, data),
    exist: (data: Record<string, unknown>) =>
      super.init<"already" | "init">(Service.Methods.GET, Service.Urls.queryBaseInit, data),
    init: (data: LoginReq) =>
      super.init<null>(Service.Methods.POST, Service.Urls.queryBaseInit, data),
  };
}
