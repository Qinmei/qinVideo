import { Status, ListQuery, IdQuery, IdsQuery, OptionReturn } from "./common";
import { ListContent } from "./request";

export type CategoryItem = {
  name: string;
  type: string;
  _id: string;
};

export type AuthorItem = {
  avatar: string;
  background: string;
  id: string;
  introduce: string;
  level: number;
  name: string;
  score: number;
};

export type EposideItem = {
  _id: string;
  title: string;
  sort: number;
};

export interface Base {
  title: string;
  slug: string;
  author: string;
  status: Status;
  introduce?: string;
  staff?: string;
  actor?: string;
  firstPlay?: string;
  isUpdate?: boolean;
  updateDay?: number;
  updateTime?: number;
  rateStar?: number;
  rateCount?: number;
  impression?: string;
  eposideCount?: number;
  playType?: string;
  noPrefix?: boolean;
  level?: number;
  linkPrefix?: string;
  downTitle?: string;
  downLink?: string;
  season?: string;
  seasonRelate?: string;
  coverVertical?: string;
  coverHorizontal?: string;
}

export interface List extends Omit<Base, "author"> {
  area: CategoryItem[];
  author: AuthorItem;
  id: string;
  kind: CategoryItem[];
  lastEposide: EposideItem;
  tag: CategoryItem[];
  year: CategoryItem[];
}

export interface QuickEdit {
  ids: string[];
  area?: string[];
  kind?: string[];
  year?: string[];
  tag?: string[];
  status?: Status;
  isUpdate?: boolean;
  updateDay?: number;
}

export type InitialState = {
  list: List[];
  total: number;
};

export interface FormValues extends Omit<Base, "author" | "eposideCount"> {
  area?: string[];
  kind?: string[];
  year?: string[];
  tag?: string[];
}

export interface Item extends Omit<Base, "author"> {
  author: AuthorItem;
  id: string;
  area: CategoryItem[];
  kind: CategoryItem[];
  tag: CategoryItem[];
  year: CategoryItem[];
}

export type QueryListReq = ListQuery;
export type QueryListRes = ListContent<List>;
// export interface CreateListReq {}
// export interface CreateListRes {}
export type UpdateListReq = QuickEdit & IdsQuery;
export type UpdateListRes = OptionReturn;
export type DeleteListReq = IdsQuery;
export type DeleteListRes = OptionReturn;

export type QueryItemReq = IdQuery;
export type QueryItemRes = Item;
export type CreateItemReq = FormValues;
export type CreateItemRes = Item;
export type UpdateItemReq = FormValues & IdQuery;
export type UpdateItemRes = OptionReturn;
export type DeleteItemReq = IdQuery;
export type DeleteItemRes = OptionReturn;
