export type MessageData = {
  title: string;
  introduce: string;
  link?: string;
  time: number;
};

export type InitialState = {
  messageList: MessageData[];
};

export enum Status {
  draft = "draft",
  publish = "publish",
  reject = "reject",
}

export type ListQuery = {
  page: number;
  size: number;
  title?: string;
  sortBy?: string;
  sortOrder?: number | string | null;
  isUpdate?: string;
  email?: string;
  type?: string;
  target?: string;
  status?: string;
  update?: string;
  updateDay?: string;
  kind?: string;
  area?: string;
  year?: string;
  tag?: string;
  ping?: string;
  source?: string;
};

export type IdQuery = {
  id: string;
};

export type OptionReturn = {
  n: number;
  ok: number;
  deletedCount?: number;
  nModified?: number;
};

export type SelectType<T> = {
  [key: string]: {
    text: string;
    value: T;
    badge?: "processing" | "success" | "error" | "default" | "warning";
  };
};

export type ListMethods<T> = {
  init: () => void;
  delete: (id: string) => void;
  update: (values: T) => Promise<unknown>;
};
