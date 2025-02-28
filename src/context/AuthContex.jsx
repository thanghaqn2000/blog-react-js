import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthStatus, logoutUser } from "../services/api/authen-v1-service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [navigator, setNavigator] = useState(null);

  useEffect(() => {
    checkAuthStatus()
      .then((response) => {
        const { access_token } = response.token_info || {};
        const user = response.user;

        if (access_token) {
          setAccessToken(access_token);
          setUser(user);
        } else {
          throw new Error("Missing access token");
        }
      })
      .catch(() => {
        logoutUser();
        setAccessToken(null);
        setUser(null);
      })
      .finally(() => {
        setIsAuthChecked(true);
      });
  }, []);

  const login = (token, userData) => {
    setAccessToken(token);
    setUser(userData);
    setIsAuthChecked(true);
    if (navigator) navigator("/");
  };

  const logout = () => {
    logoutUser();
    setAccessToken(null);
    setUser(null);
    setIsAuthChecked(true);
    if (navigator) navigator("/login");
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, user, login, logout, setNavigator, isAuthChecked }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
