import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import Editor from "ckeditor5-custom-build/build/ckeditor";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const SingleNews = (props) => {
  console.log(props);
  return (
    <div className="container mb-5">
      <h1 className="text-center text-3xl">{props.title}</h1>
      <p className="my-5 text-lg">{props.summery}</p>
      {/* <Image width={100} height={100} src={props.image} /> */}
      <div className="row">
        <div className="col-md-12">
          <CKEditor
            editor={Editor}
            //edit mode disabled
            disabled={true}
            data={props.content}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
