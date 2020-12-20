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
  page?: number;
  size?: number;
  sortBy?: string;
  sortOrder?: number;
  title?: string;
  email?: string;
  type?: string;
  target?: string;
  status?: string;
  update?: string;
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
