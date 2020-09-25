export type LoginRequest = {
  name: string;
  password: string;
};

export type LoginResponse = {
  refreshToken: string;
  token: string;
};
