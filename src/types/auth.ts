export type InitialState = Record<string, unknown>;

export type LoginReqData = {
  name: string;
  email?: string;
  password: string;
};

export type LoginReq = {
  data: LoginReqData;
};

export type LoginRes = {
  refreshToken: string;
  token: string;
};

export type UserInfoData = {
  avatar: string;
  background: string;
  email: string;
  id: string;
  introduce: string;
  level: number;
  name: string;
  score: number;
};
