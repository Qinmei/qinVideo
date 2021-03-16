import { Urls, Methods } from "@/constants";
import { Model } from "@/action/model";

import { InitialState, ListRes, List, CategoryTypeQuery } from "@/types/category";
import { ListQuery } from "@/types/common";
import { RequestRes } from "@/types/request";

export class Category extends Model<InitialState> {
  constructor() {
    super("category", {
      list: [],
      total: 0,
    });
  }

  initDispatch = {
    category: (res: RequestRes<ListRes>) =>
      super.dispatch({
        list: res.data.list,
        total: res.data.total,
      }),
  };

  methods = {
    getCategoryList: (query: ListQuery) =>
      super.init<ListRes>(Methods.GET, Urls.queryCategory, { query }, this.initDispatch.category),
    getCategoryType: (params: CategoryTypeQuery) =>
      super.init<List[]>(Methods.GET, Urls.queryCategoryType, { params }),
  };
}
