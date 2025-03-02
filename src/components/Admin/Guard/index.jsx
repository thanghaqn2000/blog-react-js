import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NotFoundPage from "../../Common/NotFoundPage";
import { isExpiredToken, setToken } from "../../../utils";
import { refreshTokenAdmin } from "../../../services/admin/authen-service";
import { toast } from "react-toastify";

const AdminGuard = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const refreshToken = localStorage.getItem("refresh_token");

        if (accessToken && refreshToken) {
          setIsAuthenticated(true);

          if(isExpiredToken(accessToken) && !isExpiredToken(refreshToken)) {
            if(!isRefreshing){
              setIsRefreshing(true);
              await refreshAccessToken(refreshToken);
              setIsRefreshing(false);
            }
          } else if(isExpiredToken(refreshToken) && isExpiredToken(accessToken)) {
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
      toast.error("Something wrong");
      navigate("/login_admin");
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
