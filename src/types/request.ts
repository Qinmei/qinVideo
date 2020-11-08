export type Options = {
  params?: {
    [key: string]: string | number;
  };
  query?: {
    [key: string]: boolean | string | number;
  };
  data?: {
    [key: string]: unknown;
  };
  formData?: FormData;
  [key: string]: unknown;
};

export type Response<T> = {
  code: number;
  msg: string | null;
  data: T;
};
