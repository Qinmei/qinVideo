import { Service } from "@/constants";
import { Model } from "@/action/model";
import { GlobalType } from "@/types";

type InitialState = {
  messageList: GlobalType.MessageData[];
};

export class Global extends Model<InitialState> {
  constructor() {
    super("global", {
      messageList: [],
    });
  }

  methods = {
    getMessage: (data: Record<string, unknown>) =>
      super.init<GlobalType.MessageData[]>(Service.Methods.GET, Service.Urls.queryMessage, data),
  };
}
