import { useHistory } from "react-router-dom";
import JWTDecode from "jwt-decode";
import { useSessionStorage } from "react-use";

import { AuthType } from "@/types";

export const useUserToken = () => {
  const [token, setToken] = useSessionStorage<string>("token");
  const [refreshToken, setRefreshToken] = useSessionStorage<string>("refreshToken");

  const history = useHistory();

  const saveTokenCall = (data: AuthType.LoginRes) => {
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
