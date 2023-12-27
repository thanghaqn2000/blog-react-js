import { myAxiosApi } from "../helper";


export const loadAllPosts = () => {
  return myAxiosApi.get(`/posts`).then((response) => response.data);
};

//load single post of given id
export const loadPost = (postId) => {
  return myAxiosApi.get("/posts/" + postId).then((reponse) => reponse.data);
};

