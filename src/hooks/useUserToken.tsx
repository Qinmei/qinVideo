import { useState } from "react";
import { AuthType } from "@/types";
import { useHistory } from "react-router-dom";
import JWTDecode from "jwt-decode";

export const useUserToken = () => {
  const tokenInit = sessionStorage.getItem("token");
  const refreshTokenInit = sessionStorage.getItem("refreshToken");

  const [token, setToken] = useState(tokenInit);
  const [refreshToken, setRefreshToken] = useState(refreshTokenInit);

  const history = useHistory();

  const saveTokenCall = (data: AuthType.LoginResponse) => {
    sessionStorage.setItem("refreshToken", data.refreshToken);
    sessionStorage.setItem("token", data.token);
    setToken(data.token);
    setRefreshToken(data.refreshToken);
  };

  const clearTokenCall = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refreshToken");
    history.push("/auth/login");
  };

  const userInfo = (token ? JWTDecode(token) : null) as AuthType.UserInfoData | null;

  return {
    token,
    refreshToken,
    userInfo,
    saveTokenCall,
    clearTokenCall,
  };
};
