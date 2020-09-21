import { Language } from "./base";

class Auth extends Language<Auth["zh_CN"]> {
  constructor() {
    super("common");
  }

  zh_CN = {
    message1: "获取所有信息",
    message2: "获取所有信息1",
    message3: "获取所有信息2",
  };

  en_US = {
    message1: "获取所有信息",
    message2: "获取所有信息1",
    message3: "获取所有信息2",
  };
}

export const auth = new Auth();
