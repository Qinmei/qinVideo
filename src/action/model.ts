import { message } from "antd";
import { store } from "@/action";
import { Request } from "@/utils";
import { Service } from "@/constants";
import { RequestType, ModelType } from "@/types";
import { ServiceError } from "@/utils";

export class Model<T> {
  constructor(public namespace: ModelType.Modules, public initialState: T) {}

  success<ResType>(res: RequestType.RequestRes<ResType>): ResType {
    return res.data;
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
  ): Promise<T> {
    return Request.init<T>(method, url, data).then(async res => {
      if (res && res.code === 20000) {
        dispatch && dispatch(res);
        return await this.success<T>(res);
      } else {
        res?.msg && message.error(res.msg || "unknown error");
        throw new ServiceError(res.response);
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
