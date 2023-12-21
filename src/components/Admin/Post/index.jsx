import "./Post.scss";
import React, {useState, useMemo} from "react";
import JoditEditor from "jodit-react";
import { ToastContainer, toast } from 'react-toastify'
import { doCreatePost } from "../../../services/admin/post-service";

function Post() {
  const [post, setPost] = useState({
    title: '',
    content: ''
  })

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
    showXPathInStatusbar: false
  }

  const config = useMemo (() => (configEditor), [])
   
  const fieldChanged = (event) => {
    console.log(event)
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const contentFieldChanaged = (data) => {
    setPost({ ...post, 'content': data })
  }

  const createPost = (event) => {

    event.preventDefault();

    doCreatePost(post).then(data => {
      alert("Post created !!")
      setPost({
          title: '',
          content: ''
      })
    }).catch((error) => {
        alert("Post not created due to some error !!")
        console.log(error)
    })
}

  return (
    <div>
      <form onSubmit={createPost}>
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
        <JoditEditor
          config={config}
          value={post.content}
          onChange={contentFieldChanaged}
        />
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Public
          </label>
        </div>
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
