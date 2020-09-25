import { message } from "antd";
import { Dispatch } from "redux";
import intl from "react-intl-universal";
import { store } from "@/action";
import { Request } from "@/utils/request";
import { RequestMethods, RequestUrls } from "@/constants/service";
import { RequestOptions, RequestResponse } from "@/types/request";
import { Modules } from "@/models/index";

type SuccessCallback<T> = (res: RequestResponse<T>, dispatch: Dispatch) => [boolean, T];
type ErrorCallback<T> = (res: RequestResponse<T>) => [boolean, T];
type InitCallback<T> = (
  method: RequestMethods,
  url: RequestUrls,
  data: RequestOptions,
  success: SuccessCallback<T>,
  error: ErrorCallback<T>
) => Promise<[boolean, T]>;

interface ModelType {
  success<K>: (res: RequestResponse<K>, dispatch: Dispatch) => [boolean, K];
}

export class Model<T> {
  constructor(public namespace: Modules, public initialState: T) {}

  success: SuccessCallback<K> = (res, dispatch) => {
    return [true, res.data];
  };

  error: ErrorCallback<K> = res => {
    return [false, res.data];
  };

  async init<K>(
    method: RequestMethods,
    url: RequestUrls,
    data: RequestOptions,
    success: SuccessCallback<K>,
    err: ErrorCallback<K>
  ) {
    return Request.init<K>(method, url, data).then(async res => {
      if (res && res.code === 10000) {
        return await success(res, store.dispatch);
      } else {
        res.code && message.error(intl.get(res.code.toString()));
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
