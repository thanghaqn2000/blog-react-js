import "./ListPost.scss";
import {
  loadAllPosts,
  deletePost,
} from "../../../../services/admin/post-service";

import { useState, useEffect } from "react";

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
        <div className="action-btn">
          <button className="btn btn-primary">Update</button>
          <button
            type="button"
            class="btn btn-danger ms-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Delete
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                   Alert
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">Chan chac chua ?</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => doDeletePost(props.post.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
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
