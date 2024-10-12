import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  loadPost,
  updatePost as doUpdatePost,
  loadCategories,
  deletePost,
} from "../../../../services/admin/post-service";
import JoditEditor from "jodit-react";
import ModalDelete from "../../../Common/ModalDelete";
import ModalUpdate from "../../../Common/ModalUpdate/modalUpdate";

function UpdateBlog() {
  const [categories, setCategories] = useState([]);
  const { postId } = useParams();
  const [post, setPost] = useState({ id: 1 });
  const navigate = useNavigate();
  const configEditor = useMemo(() => ({
    zIndex: 0,
    readonly: false,
    toolbarButtonSize: "middle",
    theme: "default",
    height: 1000,
    language: "en",
    removeButtons: [
      "source", "about", "outdent", "indent", "print", "table",
    ],
    uploader: {
      insertImageAsBase64URI: true,
    },
  }), []);

  useEffect(() => {
    loadCategories().then(setCategories).catch(() => toast.error("Error loading categories"));
    loadPost(postId).then(setPost).catch(() => toast.error("Error loading the post"));
  }, [postId]);

  const handleChange = (event, fieldName) => {
    setPost({
      ...post,
      [fieldName]: event.target.value,
    });
  };

  const handleChangeCheckbox = (event) => {
    setPost({
      ...post,
      status: event.target.checked ? "publish" : "pending",
    });
  };

  const updatePost = async () => {
    try {
      await doUpdatePost(post, post.id);
      toast.success("Update success!")
      navigate("/admin/list-post");
    } catch (error) {
      toast.error("Update failed, something went wrong!");
    }
  };

  const doDeletePost = async () => {
    try {
      await deletePost(postId);
      toast.success("Remove success");
      navigate("/admin/list-post");
    } catch (error) {
      toast.error("Remove fail");
    }
  };

  return (
    <div className="container-fluid">
      <div className="col-lg-12 d-flex mb-2">
        <div className="col-lg-4">
          <div className="input-group mb-3">
            <span className="input-group-text">Tiêu đề bài viết</span>
            <input
              type="text"
              className="form-control"
              name="title"
              value={post.title || ""}
              onChange={(event) => handleChange(event, "title")}
            />
          </div>

        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-7">
          <select
            className="form-select"
            name="category"
            value={post.category || ""}
            onChange={(event) => handleChange(event, "category")}
          >
            <option disabled value={0}></option>
            {Object.entries(categories).map(([categoryTitle]) => (
              <option value={categoryTitle} key={categoryTitle}>
                {categoryTitle}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Public
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          name="status"
          checked={post.status === "publish"}
          onChange={handleChangeCheckbox}
        />
      </div>
      <JoditEditor
        config={configEditor}
        value={post.content || ""}
        onChange={(newContent) => setPost({ ...post, content: newContent })}
      />
      <div className="justify-center flex space-x-4 mb-5 mt-3">
        <ModalUpdate updateAction={updatePost} message="Are you sure you want to update this post?" />
        <ModalDelete id={post.id} deleteAction={doDeletePost} 
          message="Are you sure you want to delete this post?"
          isShowText={true}
          />
      </div>
    </div>
  );
}

export default UpdateBlog;
