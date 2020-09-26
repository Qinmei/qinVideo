import { Service } from "@/constants";
import { Model } from "@/action/model";
import { RequestType, AuthType } from "@/types";

type InitialState = {
  active: boolean;
};

export class Auth extends Model<InitialState> {
  constructor() {
    super("auth", {
      active: false,
    });
  }

  dispatch = {
    login: (res: RequestType.Response<AuthType.LoginResponse>) => super.initDispatch({}),
  };

  methods = {
    login: (data: AuthType.LoginRequest) =>
      super.init<AuthType.LoginResponse>(Service.Methods.POST, Service.Urls.queryAuthLogin, data),
    initAdmin: (data: Record<string, unknown>) =>
      super.init<"already" | "init">(Service.Methods.GET, Service.Urls.queryBaseInit, data),
  };
}
