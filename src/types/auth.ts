export type LoginRequestData = {
  name: string;
  email?: string;
  password: string;
};

export type LoginRequest = {
  data: LoginRequestData;
};

export type LoginResponse = {
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
