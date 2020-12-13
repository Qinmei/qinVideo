import { message } from "antd";
import { store } from "@/action";
import { Request } from "@/utils";
import { Service } from "@/constants";
import { RequestType, ModelType } from "@/types";

export class Model<T> {
  constructor(public namespace: ModelType.Modules, public initialState: T) {}

  success<ResType>(res: RequestType.Response<ResType>): [boolean, ResType] {
    return [true, res?.data];
  }

  error<ResType>(res: RequestType.Response<ResType>): [boolean, ResType] {
    return [false, res?.data];
  }

  dispatch(payload: Partial<T>) {
    store.dispatch<{ type: string; payload: Partial<T> }>({
      type: this.namespace,
      payload,
    });
  }

  async init<T>(
    method: Service.Methods,
    url: Service.Urls,
    data: RequestType.Options,
    dispatch?: ModelType.DispathCustom<T>
  ): Promise<[boolean, T]> {
    return Request.init<T>(method, url, data).then(async res => {
      if (res && res.code === 10000) {
        dispatch && dispatch(res);
        return await this.success<T>(res);
      } else {
        res?.msg && message.error(res.msg || "unknown error");
        return await this.error<T>(res);
      }
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
