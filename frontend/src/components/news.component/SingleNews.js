import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import Editor from "ckeditor5-custom-build/build/ckeditor";

const SingleNews = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.summery}</p>
      <CKEditor
        editor={Editor}
        data={props.content}
        disabled={true}
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default SingleNews;
