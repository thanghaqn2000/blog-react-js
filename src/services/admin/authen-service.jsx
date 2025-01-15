import { myAxiosAdmin } from "../helper";

export const login = async (adminData) => {
  const response = await myAxiosAdmin
    .post(
      `/login`,
      adminData
    );
  return response.data;
};

export const refreshTokenAdmin = async (refreshToken) => {
  const response = await myAxiosAdmin
    .post(
      `/refresh_tokens`,{
      refresh_token: refreshToken
    });
  return response.data;
};
