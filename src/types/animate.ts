import { Status } from "./common";
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

export type InitialState = {
  list: List[];
  total: number;
};

export type ListRes = ListContent<List>;

export interface FormValues extends Omit<Base, "author" | "eposideCount"> {
  area?: string[];
  kind?: string[];
  year?: string[];
  tag?: string[];
}

export type CreateItemReq = FormValues;

export interface ItemRes extends Omit<Base, "author"> {
  author: AuthorItem;
  id: string;
  area: CategoryItem[];
  kind: CategoryItem[];
  tag: CategoryItem[];
  year: CategoryItem[];
}

export interface UpdateListReq {
  ids: string[];
  area?: string[];
  kind?: string[];
  year?: string[];
  tag?: string[];
  status?: Status;
  isUpdate?: boolean;
  updateDay?: number;
}

export interface DeleteReq {
  ids: string[];
}

export interface UpdateItemReq extends CreateItemReq {
  id: string;
}
