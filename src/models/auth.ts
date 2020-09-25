import { RequestUrls, RequestMethods } from "@/constants";
import { Model } from "@/action/model";
import { RequestResponse, LoginResponse, LoginRequest } from "@/types";

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
    login: (res: RequestResponse<LoginResponse>) => super.initDispatch({}),
  };

  methods = {
    login: (data: LoginRequest) =>
      super.init<LoginResponse>(RequestMethods.POST, RequestUrls.queryAuthLogin, data),
    initAdmin: (data: {}): Promise<[boolean, string]> =>
      super.init(RequestMethods.GET, RequestUrls.queryBaseInit, data),
  };
}
