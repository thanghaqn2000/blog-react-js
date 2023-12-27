import { myAxiosAdmin } from "../helper";

export const doCreatePost = (postData) => {
  return myAxiosAdmin
    .post(
      `/posts`,
      postData
    )
    .then((response) => response.data);
};

export const loadAllPosts = () => {
  return myAxiosAdmin.get(`/posts`).then((response) => response.data);
};

export const loadPost = (postId) => {
  return myAxiosAdmin.get("/posts/" + postId).then((reponse) => reponse.data);
};

export function deletePost(postId) {
  return myAxiosAdmin.delete("/posts/" + postId).then((reponse) => reponse.data);;
}

export function updatePost(post, postId) {
  return myAxiosAdmin.put(`/posts/${postId}`, post).then((reponse) => reponse.data);
}

export const loadCategories = () => {
  return myAxiosAdmin.get(`/posts/categories`).then((response) => response.data);
};
