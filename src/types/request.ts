export type Options = {
  params?: {
    [key: string]: string | number;
  };
  query?: {
    [key: string]: boolean | string | number;
  };
  data?: {
    [key: string]: any;
  };
  formData?: FormData;
  [key: string]: any;
};

export type ResponseData = {
  code: number;
  msg: string | null;
  data: any;
};
