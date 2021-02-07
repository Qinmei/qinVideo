import { ListContent } from "./request";

export type ArrValueType = { name: string; value: string; _id?: string };

export type OnModelType = "Animate" | "Comic";

export type EposideItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  sort: number;
  cover: string;
  bilibili: string;
  noSetPrefix: boolean;
  link: ArrValueType[];
  subtitle: ArrValueType[];
};

export type InitialState = {
  list: EposideItem[];
  total: number;
};

export type ListRes = ListContent<EposideItem>;

export interface CreateItemReq extends Omit<EposideItem, "id"> {
  target: string;
  onModel: "Animate" | "Comic";
}

export interface UpdateItemReq extends Partial<EposideItem> {
  id: string;
}

export interface DeleteListReq {
  ids: string[];
}

export interface UpdateListReq {
  ids: string[];
  cover?: string;
  noSetPrefix?: boolean;
}

export interface CreateListItem {
  title: string | number;
  sort: number;
  target: string;
  onModel: OnModelType;
  link: ArrValueType[];
}

export type CreateListReq = CreateListItem[];
