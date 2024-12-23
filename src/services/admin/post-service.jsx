import { myAxiosAdmin } from "../helper";

export const doCreatePost = async (postData) => {
  const response = await myAxiosAdmin
    .post(
      `/posts`,
      postData
    );
  return response.data;
};

export const loadAllPosts = async () => {
  const response = await myAxiosAdmin.get(`/posts`);
  return response.data;
};

export const loadPost = async (postId) => {
  const reponse = await myAxiosAdmin.get("/posts/" + postId);
  return reponse.data;
};

export async function deletePost(postId) {
  const reponse = await myAxiosAdmin.delete("/posts/" + postId);
  return reponse.data;;
}

export async function updatePost(post, postId) {
  const reponse = await myAxiosAdmin.put(`/posts/${postId}`, post);
  return reponse.data;
}

export const loadCategories = async () => {
  const response = await myAxiosAdmin.get(`/posts/categories`);
  return response.data;
};
