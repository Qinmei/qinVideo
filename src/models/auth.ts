import { Service } from "@/constants";
import { Model } from "@/action/model";
import { InitialState, LoginReq, LoginRes, InitReq } from "@/types/auth";

export class Auth extends Model<InitialState> {
  constructor() {
    super("auth", {});
  }

  methods = {
    login: (data: LoginReq) =>
      super.init<LoginRes>(Service.Methods.POST, Service.Urls.queryAuthLogin, { data }),
    exist: () =>
      super.init<"already" | "init">(Service.Methods.GET, Service.Urls.queryBaseInit, {}),
    init: (data: InitReq) =>
      super.init<null>(Service.Methods.POST, Service.Urls.queryBaseInit, { data }),
  };
}
