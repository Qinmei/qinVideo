import { Urls, Methods } from "@/constants";
import { Model } from "@/action/model";
import {
  InitialState,
  ListRes,
  EposideItem,
  CreateItemReq,
  UpdateItemReq,
  UpdateListReq,
} from "@/types/eposide";
import { ListQuery, IdQuery, IdsQuery, OptionReturn } from "@/types/common";
import { RequestRes } from "@/types/request";

export class Eposide extends Model<InitialState> {
  constructor() {
    super("eposide", {
      list: [],
      total: 0,
    });
  }

  initDispatch = {
    eposide: (res: RequestRes<ListRes>) =>
      super.dispatch({
        list: res.data.list,
        total: res.data.total,
      }),
  };

  methods = {
    getEposideList: (query: ListQuery) =>
      super.init<ListRes>(Methods.GET, Urls.queryEposide, { query }, this.initDispatch.eposide),
    updateEposideList: (data: UpdateListReq) =>
      super.init<OptionReturn>(Methods.PUT, Urls.queryEposide, { data }),
    deleteEposideList: (data: IdsQuery) =>
      super.init<OptionReturn>(Methods.DELETE, Urls.queryEposide, { data }),
    createEposideItem: (data: CreateItemReq) =>
      super.init<EposideItem>(Methods.POST, Urls.queryEposide, { data }),
    getEposideItem: (params: IdQuery) =>
      super.init<EposideItem>(Methods.GET, Urls.singleEposide, { params }),
    updateEposideItem: ({ id, ...data }: UpdateItemReq) =>
      super.init<OptionReturn>(Methods.PUT, Urls.singleEposide, { params: { id }, data }),
    deleteEposideItem: (params: IdQuery) =>
      super.init<OptionReturn>(Methods.DELETE, Urls.singleEposide, { params }),
  };
}
