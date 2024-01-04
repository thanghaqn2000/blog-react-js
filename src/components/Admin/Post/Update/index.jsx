import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  loadPost,
  updatePost as doUpdatePost,
  loadCategories,
  deletePost,
} from "../../../../services/admin/post-service";
import JoditEditor from "jodit-react";

function UpdateBlog() {
  const [categories, setCategories] = useState([]);

  const { postId } = useParams();
  const [post, setPost] = useState({ id: 1 });
  const navigate = useNavigate()
  const configEditor = {
    zIndex: 0,
    readonly: false,
    activeButtonsInReadOnly: ["source", "fullsize", "print", "about"],
    toolbarButtonSize: "middle",
    theme: "default",
    enableDragAndDropFileToEditor: true,
    saveModeInCookie: false,
    spellcheck: true,
    editorCssclassName: false,
    triggerChangeEvent: true,
    height: 1000,
    direction: "ltr",
    language: "en",
    debugLanguage: false,
    i18n: "en",
    tabIndex: -1,
    toolbar: true,
    enter: "P",
    useSplitMode: false,
    colorPickerDefaultTab: "background",
    imageDefaultWidth: 100,
    removeButtons: [
      "source",
      "about",
      "outdent",
      "indent",
      "print",
      "table",
      "superscript",
      "subscript",
      "file",
      "cut",
      "selectall",
    ],
    disablePlugins: ["paste", "stat"],
    events: {},
    textIcons: false,
    uploader: {
      insertImageAsBase64URI: true,
    },
    placeholder: "",
    showXPathInStatusbar: false,
  };
  const config = useMemo(() => configEditor, []);

  useEffect(() => {
    loadCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
      });

    loadPost(postId)
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        toast.error("error in loading the blog");
      });
  }, []);

  const handleChange = (event, fieldName) => {
    setPost({
      ...post,
      [fieldName]: event.target.value,
    });
  };

  const updatePost = (event) => {
    event.preventDefault();
    console.log(post);
    doUpdatePost(post, post.id)
      .then((res) => {
        console.log(res);
        alert("Update success!");
      })
      .catch((error) => {
        console.log(error);
        alert("Update fail");
      });
  };

  const doDeletePost = () => {
    deletePost(postId)
      .then((data) => {
        alert("Remove success")
        navigate("/")
      })
      .catch((error) => {
        alert("Remove fail")
      });
  };

  const listCategories = Object.entries(categories);
  return (
    <div className="container-fluid">
      <form onSubmit={updatePost}>
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
                onChange={(event) => handleChange(event, "title")}
              />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <select
              className="form-select"
              aria-label="Default select example"
              name="category"
              onChange={(event) => handleChange(event, "category")}
              value={post.category}
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
            checked={post.status}
            // onChange={statusFieldChanged}
          />
        </div>
        <JoditEditor
          config={config}
          value={post.content}
          onChange={(newContent) => setPost({ ...post, content: newContent })}
        />
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="submit">
            Update
          </button>
          <button className="btn btn-danger" type="button" onClick={doDeletePost}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBlog;
