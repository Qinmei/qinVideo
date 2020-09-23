import { RequestUrls, RequestMethods } from "@/constants";
import { Model } from "@/action/model";

type InitialState = {};

export class Auth extends Model<InitialState> {
  constructor() {
    super("auth", {});
  }

  methods = {
    login: (data: any) => super.init(RequestMethods.POST, RequestUrls.login, data),
  };
}
