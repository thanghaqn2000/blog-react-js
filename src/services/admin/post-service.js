import { myAxiosAdmin } from "../helper";
//create post function
export const doCreatePost = (postData) => {
  return myAxiosAdmin
    .post(
      `/posts`,
      postData
    )
    .then((response) => response.data);
};

//get all posts

export const loadAllPosts = () => {
  return myAxiosAdmin.get(`/posts`).then((response) => response.data);
};

//load single post of given id
export const loadPost = (postId) => {
  return myAxiosAdmin.get("/posts/" + postId).then((reponse) => reponse.data);
};

// //delete post
// export function deletePostService(postId) {
//   return privateAxios.delete(`/posts/${postId}`).then((res) => res.data);
// }

// //update post
// export function updatePost(post, postId) {
//   console.log(post);
//   return privateAxios.put(`/posts/${postId}`, post).then((resp) => resp.data);
// }
export const loadCategories = () => {
  return myAxiosAdmin.get(`/posts/categories`).then((response) => response.data);
};
