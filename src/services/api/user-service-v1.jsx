import { myAxiosApi } from "../helper";

export const registerUser = async (user) => {
  const response = await myAxiosApi
    .post(
      `/users`,
      user
    );
  return response.data;
};

export const checkInfoUniqueness = async (info={}) => {
  const { email, phone_number } = info; 
  const reponse = await myAxiosApi.get(`/users/check_info_uniqueness`, {
    params: { email, phone_number },
  });
  return reponse.data;
};
