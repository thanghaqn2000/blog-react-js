import "./AddPost.scss";
import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import {
  doCreatePost,
  loadCategories,
} from "../../../../services/admin/post-service";
import ModalCreate from "../../../Common/ModalCreate";
import { toast } from "react-toastify";
import configEditor from "../../../../ultils/constant";
import ImageUpload from "../../../Common/ImageUpload";

function AddPost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    status: 0,
    category: "news",
  });
  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState(null);
  const navigate = useNavigate();
  const listCategories = Object.entries(categories);

  useEffect(() => {
    window.scrollTo(0,0)
    loadCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
      })
  }, []);

  const config = useMemo(() => configEditor, []);
  const fieldChanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const statusFieldChanged = (event) => {
    const value = event.target.checked ? 1 : 0;
    setPost({ ...post, status: value });
  };
  const contentFieldChanaged = (data) => {
    setPost({ ...post, content: data });
  };
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const createPost = async () => {
    const formData = new FormData();
    const status = post.status === "0" ? "pending" : "publish"
    formData.append("post[title]", post.title);
    formData.append("post[content]", post.content);
    formData.append("post[status]", status);
    formData.append("post[category]", post.category);
  
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      await doCreatePost(formData);
      toast.success("Created success!");
      navigate("/admin/list-post");
    } catch (error) {
      toast.error("Created failed, something went wrong!");
    }
  };

  return (
    <div className="container-fluid">
      <div className="col-lg-12 d-flex mb-2">
        <div className="col-lg-4">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Tiêu đề bài viết
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="title"
              value={post.title}
              onChange={fieldChanged}
            />
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-7">
          <select
            className="form-select"
            aria-label="Default select example"
            name="category"
            onChange={fieldChanged}
          >
            <option disabled value={0}>
              --Chon the loai--
            </option>
            {listCategories.map(([categoryTitle, categoryId]) => (
              <option value={categoryTitle} key={categoryTitle}>
                {categoryTitle}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ImageUpload onImageSelect={handleImageSelect} existingImageUrl={existingImageUrl}></ImageUpload>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Public
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          value={post.status}
          id="flexCheckDefault"
          name="status"
          onChange={statusFieldChanged}
        />
      </div>
      <JoditEditor
        config={config}
        value={post.content}
        onChange={contentFieldChanaged}
      />
      <div className="justify-center flex space-x-4 mb-5 mt-3">
        <ModalCreate createAction={createPost} message="Are you sure you want to create this post?" />
      </div>
    </div>
  );
}

export default AddPost;
