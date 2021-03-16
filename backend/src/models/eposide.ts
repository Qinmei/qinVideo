import { Urls, Methods } from "@/constants";
import { Model } from "@/action/model";
import {
  InitialState,
  ListRes,
  EposideItem,
  CreateItemReq,
  UpdateItemReq,
  UpdateListReq,
  CreateListReq,
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

  eposide = (res: RequestRes<ListRes>) =>
    super.dispatch({
      list: res.data.list,
      total: res.data.total,
    });

  methods = {
    queryList: (query: ListQuery) =>
      super.init<ListRes>(Methods.GET, Urls.queryEposide, { query }, this.eposide),
    updateList: (data: UpdateListReq) =>
      super.init<OptionReturn>(Methods.PUT, Urls.queryEposide, { data }),
    deleteList: (data: IdsQuery) =>
      super.init<OptionReturn>(Methods.DELETE, Urls.queryEposide, { data }),
    createList: (data: CreateListReq) =>
      super.init<OptionReturn>(Methods.POST, Urls.queryEposide, { data }),
    createItem: (data: CreateItemReq) =>
      super.init<EposideItem>(Methods.POST, Urls.queryEposide, { data }),
    queryItem: (params: IdQuery) =>
      super.init<EposideItem>(Methods.GET, Urls.singleEposide, { params }),
    updateItem: ({ id, ...data }: UpdateItemReq) =>
      super.init<OptionReturn>(Methods.PUT, Urls.singleEposide, { params: { id }, data }),
    deleteItem: (params: IdQuery) =>
      super.init<OptionReturn>(Methods.DELETE, Urls.singleEposide, { params }),
  };
}
