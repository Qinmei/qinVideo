import { Service } from "@/constants";
import { Model } from "@/action/model";
import { InitialState, ListRes, ItemRes } from "@/types/animate";
import { ListQuery, IdQuery, OptionReturn } from "@/types/global";
import { RequestRes } from "@/types/request";

export class Animate extends Model<InitialState> {
  constructor() {
    super("animate", {
      list: [],
      total: 0,
    });
  }

  initDispatch = {
    animate: (res: RequestRes<ListRes>) =>
      super.dispatch({
        list: res.data.list,
        total: res.data.total,
      }),
  };

  methods = {
    getAnimateList: (query: ListQuery) =>
      super.init<ListRes>(
        Service.Methods.GET,
        Service.Urls.queryAnimate,
        { query },
        this.initDispatch.animate
      ),
    createAnimateList: (data: ListQuery) =>
      super.init<ItemRes>(Service.Methods.POST, Service.Urls.queryAnimate, { data }),
    updateAnimateList: (data: ListQuery) =>
      super.init<OptionReturn>(Service.Methods.POST, Service.Urls.queryAnimate, { data }),
    deleteAnimateList: (query: ListQuery) =>
      super.init<OptionReturn>(Service.Methods.DELETE, Service.Urls.queryAnimate, { query }),
    getAnimateItem: (params: IdQuery) =>
      super.init<ItemRes>(Service.Methods.GET, Service.Urls.singleAnimate, { params }),
    updateAnimateItem: (params: IdQuery) =>
      super.init<OptionReturn>(Service.Methods.PUT, Service.Urls.singleAnimate, { params }),
    deleteAnimateItem: (params: IdQuery) =>
      super.init<OptionReturn>(Service.Methods.DELETE, Service.Urls.singleAnimate, { params }),
  };
}
