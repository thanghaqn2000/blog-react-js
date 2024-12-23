import axios from "axios";

export const BASE_URL_API = "http://localhost:3000/api/v1";
export const BASE_URL_ADMIN = "http://localhost:3000/api/admin";

export const myAxiosApi = axios.create({
  baseURL: BASE_URL_API,
});

export const myAxiosAdmin = axios.create({
  baseURL: BASE_URL_ADMIN,
  validateStatus: function (status) {
    return status < 500;
  },
});

myAxiosAdmin.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    config.headers.JWTAuthorization = `Bearer ${accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
