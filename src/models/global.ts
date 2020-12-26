import { Methods, Urls } from "@/constants";
import { Model } from "@/action/model";
import { InitialState, MessageData } from "@/types/global";
import { RequestRes } from "@/types/request";

export class Global extends Model<InitialState> {
  constructor() {
    super("global", {
      messageList: [],
    });
  }

  initDispatch = {
    message: (res: RequestRes<MessageData[]>) =>
      super.dispatch({
        messageList: res.data,
      }),
  };

  methods = {
    getMessage: () =>
      super.init<MessageData[]>(Methods.GET, Urls.queryMessage, {}, this.initDispatch.message),
  };
}
