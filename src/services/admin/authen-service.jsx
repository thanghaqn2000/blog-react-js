import { myAxiosAdmin } from "../helper";

export const login = async (adminData) => {
  const response = await myAxiosAdmin
    .post(
      `/login`,
      adminData
    );
  return response.data;
};
