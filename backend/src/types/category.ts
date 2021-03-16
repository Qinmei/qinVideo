import { ListContent } from "./request";

export type CateType =
  | "aarea"
  | "ayear"
  | "akind"
  | "atag"
  | "carea"
  | "cyear"
  | "ckind"
  | "ctag"
  | "pkind"
  | "ptag"
  | "blog";

export type List = {
  cover: string;
  createdAt: string;
  id: string;
  introduce: string;
  name: string;
  show: boolean;
  type: CateType;
  updatedAt: string;
};

export type InitialState = {
  list: List[];
  total: number;
};

export type ListRes = ListContent<List>;

export type CategoryTypeQuery = {
  type: CateType;
};
