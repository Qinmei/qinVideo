import { message } from "antd";
import { Dispatch } from "redux";
import { intl, LanguageKeys } from "@/locales";
import { store } from "@/action";
import { Request } from "@/utils";
import { Service } from "@/constants";
import { RequestType } from "@/types";
import { Modules } from "@/models";

export class Model<T> {
  constructor(public namespace: Modules, public initialState: T) {}

  success<T>(res: RequestType.Response<T>, dispatch: Dispatch): [boolean, T] {
    return [true, res.data];
  }

  error<T>(res: RequestType.Response<T>): [boolean, T] {
    return [false, res.data];
  }

  async init<T>(
    method: Service.Methods,
    url: Service.Urls,
    data: RequestType.Options,
    success = this.success,
    err = this.error
  ): Promise<[boolean, T]> {
    return Request.init<T>(method, url, data).then(async res => {
      if (res && res.code === 10000000) {
        return await success<T>(res, store.dispatch);
      } else {
        res.code && message.error(intl.get(res.code.toString() as LanguageKeys));
        return await err<T>(res);
      }
    });
  }

  initDispatch(payload: Partial<T>): void {
    store.dispatch<{ type: string; payload: Partial<T> }>({
      type: this.namespace,
      payload,
    });
  }

  handler = (state = this.initialState, action: { type: string; payload: Partial<T> }): T => {
    if (action && action.type === this.namespace) {
      return {
        ...state,
        ...action.payload,
      };
    } else {
      return state;
    }
  };
}
