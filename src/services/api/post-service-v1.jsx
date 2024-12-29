import { myAxiosApi } from "../helper";

export const loadAllPosts = async (options = {}) => {
  const { page = 1, title } = options; 
  try {
    const response = await myAxiosApi
      .get(`/posts`, {
        params: { page, title },
      });
    return response.data;
  } catch (error) {
    console.error("Error loading posts:", error);
    throw error;
  }
};

export const loadPost = async (postId) => {
  const reponse = await myAxiosApi.get("/posts/" + postId);
  return reponse.data;
};

