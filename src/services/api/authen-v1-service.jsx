import { myAxiosApi } from "../helper";

export const loginUser = async (userData) => {
  const response = await myAxiosApi.post(`/login`, userData, {
    withCredentials: true,
  });
  return response.data;
};

export const checkAuthStatus = async (refreshToken) => {
  const response = await myAxiosApi.post(
    `/refresh_tokens`,
    {
      refresh_token: refreshToken,
    },
    { withCredentials: true }
  );
  return response.data;
};

export const logoutUser = async () => {
  const response = await myAxiosApi.delete(`/logout`, {
    withCredentials: true,
  });
  return response.data;
};
