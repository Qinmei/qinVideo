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

export type IdsQuery = {
  ids: string[];
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
    label?: string;
    value: T;
    badge?: "processing" | "success" | "error" | "default" | "warning";
  };
};

export type ListMethods<T> = {
  init: () => void;
  set: (values: Partial<ListQuery>) => void;
  update: (values: T) => Promise<unknown>;
  updateMany: (values: T) => Promise<unknown>;
  remove: (id: string) => Promise<unknown>;
  removeMany: (ids: string[]) => Promise<unknown>;
  reset: () => void;
};

export type UploadType =
  | "animate"
  | "comic"
  | "post"
  | "blog"
  | "avatar"
  | "background"
  | "config"
  | "others";

export type FileListType = {
  encoding: string;
  field: string;
  fieldname: string;
  filename: string;
  filepath: string;
  mime: string;
  mimeType: string;
  path: string;
  transferEncoding: string;
};

export type CreateGlobalStateType<T> = () => [T, (state: T) => void];
