import { Service } from "@/constants";
import { Model } from "@/action/model";
import { AuthType } from "@/types";

type InitialState = {};

export class Auth extends Model<InitialState> {
  constructor() {
    super("auth", {});
  }

  methods = {
    login: (data: AuthType.LoginReq) =>
      super.init<AuthType.LoginRes>(Service.Methods.POST, Service.Urls.queryAuthLogin, data),
    exist: (data: Record<string, unknown>) =>
      super.init<"already" | "init">(Service.Methods.GET, Service.Urls.queryBaseInit, data),
    init: (data: AuthType.LoginReq) =>
      super.init<null>(Service.Methods.POST, Service.Urls.queryBaseInit, data),
  };
}
