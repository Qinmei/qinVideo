import { Urls, Methods } from "@/constants";
import { Model } from "@/action/model";
import { InitialState, LoginReq, LoginRes, InitReq } from "@/types/auth";

export class Auth extends Model<InitialState> {
  constructor() {
    super("auth", {});
  }

  methods = {
    login: (data: LoginReq) => super.init<LoginRes>(Methods.POST, Urls.queryAuthLogin, { data }),
    exist: () => super.init<"already" | "init">(Methods.GET, Urls.queryBaseInit, {}),
    init: (data: InitReq) => super.init<null>(Methods.POST, Urls.queryBaseInit, { data }),
  };
}
