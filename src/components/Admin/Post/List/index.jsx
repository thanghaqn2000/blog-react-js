import "./ListPost.scss";
import {
  loadAllPosts,
  deletePost,
} from "../../../../services/admin/post-service";

import { useState, useEffect } from "react";
import ModalDelete from "../../../Common/ModalDelete";

function ShowListPost(props) {
  const doDeletePost = (postId) => {
    deletePost(postId)
      .then((data) => {
        alert("Remove success");
        loadAllPosts()
          .then((data) => {
            props.updateListPost(data);
          })
          .catch((error) => {});
      })
      .catch((error) => {
        alert("Remove fail");
      });
  };

  return (
    <tr>
      <th scope="row">{props.post.id}</th>
      <td>{props.post.title}</td>
      <td>{props.post.title}</td>
      <td>{props.post.category}</td>
      <td>{props.post.status}</td>
      <td>{props.post.created_at}</td>
      <td>
        <div className="action-btn flex space-x-4">
          <button
            className="block text-white bg-green-600 hover:bg-green-700 focus:ring-4
            focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
            type="button"
          >
            Update
          </button>
          <ModalDelete
            id={props.post.id}
            deleteAction={doDeletePost}
            message="Are you sure you want to delete this post?"/>
        </div>
      </td>
    </tr>
  );
}

function ListPost() {
  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    loadAllPosts()
      .then((data) => {
        setListPost(data);
      })
      .catch((error) => {});
  }, []);

  const updateListPost = (updatedList) => {
    setListPost(updatedList);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Category</th>
          <th scope="col">Status</th>
          <th scope="col">Created at</th>
          <th scope="col" colSpan={2}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {listPost.map((post, index) => (
          <ShowListPost
            post={post}
            key={index}
            updateListPost={updateListPost}
          ></ShowListPost>
        ))}
      </tbody>
    </table>
  );
}

export default ListPost;
