import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NotFoundPage from "../../Common/NotFoundPage";
import { isExpiredToken, setToken } from "../../../utils";
import { refreshTokenAdmin } from "../../../services/admin/authen-service";

const AdminGuard = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const refreshToken = localStorage.getItem("refresh_token");

        if (accessToken && refreshToken) {
          setIsAuthenticated(true);

          if(isExpiredToken(accessToken)) {
            await refreshAccessToken(refreshToken);
          } else if(isExpiredToken(refreshToken)) {
            navigate("/login_admin");
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error during authentication:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await refreshTokenAdmin(refreshToken);
      const { access_token, refresh_token } = response.token_info || {};

      if (!access_token || !refresh_token) {
        throw new Error("Invalid token info received");
      }
      setToken(access_token, refresh_token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <NotFoundPage />;
  }

  return children;
};

export default AdminGuard;
