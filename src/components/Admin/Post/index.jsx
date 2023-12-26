import "./Post.scss";
import React, { useState, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import {
  doCreatePost,
  loadCategories,
} from "../../../services/admin/post-service";

function Post() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    status: false,
    categoty: "",
  });
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));;
  }, []);

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
  const fieldChanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const statusFieldChanged = (event) => {
    console.log(event)
    const value = event.target.checked ? 1 : 0;
    setPost({ ...post, status: value });
  };
  const contentFieldChanaged = (data) => {
    setPost({ ...post, content: data });
  };

  const createPost = (event) => {
    event.preventDefault();

    doCreatePost(post)
      .then((data) => {
        alert("Post created !!");
        setPost({
          title: "",
          content: "",
        });
      })
      .catch((error) => {
        alert("Post not created due to some error !!");
        console.log(error);
      });
  };

  const listCategories = Object.entries(categories);

  if (loading) {
    return null
  }

  return (
    <div className="container-fluid">
      <form onSubmit={createPost}>
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
            // checked={post.status}
            onChange={statusFieldChanged}
          />
        </div>
        <JoditEditor
          config={config}
          value={post.content}
          onChange={contentFieldChanaged}
        />
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default Post;
