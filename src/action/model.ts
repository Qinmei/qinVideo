import { message } from "antd";
import { Dispatch } from "redux";
import intl from "react-intl-universal";
import { store } from "@/action";
import { Request } from "@/utils/request";
import { RequestMethods, RequestUrls } from "@/constants/service";
import { Options, ResponseData } from "@/types/request";
import { Modules } from "@/models/index";

class Model<T> {
  constructor(public namespace: Modules, public initialState: T) {}

  success(res: ResponseData, dispatch: Dispatch): [boolean, any] {
    return [true, res.data];
  }

  error(res: ResponseData): [boolean, any] {
    return [false, res.data];
  }

  async init(
    method: RequestMethods,
    url: RequestUrls,
    data: Options,
    success = this.success,
    err = this.error,
  ): Promise<[boolean, any] | void> {
    return Request.init(method, url, data).then(async (res) => {
      if (res && res.code === 10000000) {
        return await success(res, store.dispatch);
      } else {
        res.code && message.error(intl.get(res.code));
        return await err(res);
      }
    });
  }

  initDispatch(payload: Partial<T>): void {
    store.dispatch<{ type: string; payload: Partial<T> }>({
      type: this.namespace,
      payload,
    });
  }

  handler = (
    state = this.initialState,
    action: { type: string; payload: Partial<T> },
  ): T => {
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

export default Model;
