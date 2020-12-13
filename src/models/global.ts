import { Service } from "@/constants";
import { Model } from "@/action/model";
import { GlobalType, RequestType } from "@/types";

export class Global extends Model<GlobalType.InitialState> {
  constructor() {
    super("global", {
      messageList: [],
    });
  }

  initDispatch = {
    message: (res: RequestType.RequestRes<GlobalType.MessageData[]>) =>
      super.dispatch({
        messageList: res.data,
      }),
  };

  methods = {
    getMessage: (data: Record<string, unknown>) =>
      super.init<GlobalType.MessageData[]>(
        Service.Methods.GET,
        Service.Urls.queryMessage,
        data,
        this.initDispatch.message
      ),
  };
}
