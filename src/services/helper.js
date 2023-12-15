import axios from "axios";

export const BASE_URL_API = "http://localhost:3000/api/v1";
export const BASE_URL_ADMIN = "http://localhost:3000/api/admin";

export const myAxiosApi = axios.create({
  baseURL: BASE_URL_API,
});

export const myAxiosAdmin = axios.create({
  baseURL: BASE_URL_ADMIN,
});
