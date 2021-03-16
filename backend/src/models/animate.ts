import { Urls, Methods } from "@/constants";
import { Model } from "@/action/model";
import {
  InitialState,
  QueryListReq,
  QueryListRes,
  UpdateListReq,
  UpdateListRes,
  DeleteListReq,
  DeleteListRes,
  QueryItemReq,
  QueryItemRes,
  CreateItemReq,
  CreateItemRes,
  UpdateItemReq,
  UpdateItemRes,
  DeleteItemReq,
  DeleteItemRes,
} from "@/types/animate";
import { RequestRes } from "@/types/request";

export class Animate extends Model<InitialState> {
  constructor() {
    super("animate", {
      list: [],
      total: 0,
    });
  }

  animate = (res: RequestRes<QueryListRes>) =>
    super.dispatch({
      list: res.data.list,
      total: res.data.total,
    });

  methods = {
    queryList: (query: QueryListReq) =>
      super.init<QueryListRes>(Methods.GET, Urls.queryAnimate, { query }, this.animate),
    updateList: (data: UpdateListReq) =>
      super.init<UpdateListRes>(Methods.PUT, Urls.queryAnimate, { data }),
    deleteList: (data: DeleteListReq) =>
      super.init<DeleteListRes>(Methods.DELETE, Urls.queryAnimate, { data }),
    createItem: (data: CreateItemReq) =>
      super.init<CreateItemRes>(Methods.POST, Urls.queryAnimate, { data }),
    queryItem: (data: QueryItemReq) =>
      super.init<QueryItemRes>(Methods.GET, Urls.singleAnimate, { params: data }),
    updateItem: ({ id, ...data }: UpdateItemReq) =>
      super.init<UpdateItemRes>(Methods.PUT, Urls.singleAnimate, { params: { id }, data }),
    deleteItem: (data: DeleteItemReq) =>
      super.init<DeleteItemRes>(Methods.DELETE, Urls.singleAnimate, { params: data }),
  };
}
