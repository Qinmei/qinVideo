import { useState } from "react";
import { AuthType } from "@/types";
import { useHistory } from "react-router-dom";
import JWTDecode from "jwt-decode";

export const useUserToken = () => {
  const tokenInit = localStorage.getItem("token");
  const refreshTokenInit = localStorage.getItem("refreshToken");

  const [token, setToken] = useState(tokenInit);
  const [refreshToken, setRefreshToken] = useState(refreshTokenInit);

  const history = useHistory();

  const saveTokenCall = (data: AuthType.LoginResponse) => {
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("token", data.token);
    setToken(data.token);
    setRefreshToken(data.refreshToken);
  };

  const clearTokenCall = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
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
