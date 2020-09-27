export type LoginRequestData = {
  name: string;
  password: string;
};

export type LoginRequest = {
  data: LoginRequestData;
};

export type LoginResponse = {
  refreshToken: string;
  token: string;
};
