import "./Post.scss";
import React, { useState} from "react";

import JoditEditor from "jodit-react";

function Post({ placeholder }) {
  const [content, setContent] = useState("");
  const config = {
    zIndex: 0,
    readonly: false,
    activeButtonsInReadOnly: ["source", "fullsize", "print", "about"],
    toolbarButtonSize: "middle",
    theme: "default",
    enableDragAndDropFileToEditor: true,
    saveModeInCookie: false,
    spellcheck: true,
    editorCssClass: false,
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
      "fullsize",
      "about",
      "outdent",
      "indent",
      "video",
      "print",
      "table",
      "fontsize",
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

  return (
    <div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Tiêu đề bài viết
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <JoditEditor
        config={config}
        // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Public
        </label>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button">
          Post
        </button>
      </div>
    </div>
  );
}

export default Post;
