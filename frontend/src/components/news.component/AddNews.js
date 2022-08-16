import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import Editor from "ckeditor5-custom-build/build/ckeditor";
import axios from "axios";
import { API_URL } from "../../config/index";
// import { API_URL } from "../../../config";
// import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";

const AddNews = () => {
  const [validated, setValidated] = useState(false);

  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(true);

  function addNews(e) {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const newNews = {
        title,
        summery,
        content,
        image,
        status,
      };

      axios
        .post(`${API_URL}/api/newspage/`, newNews)
        .then(() => {
          alert("New News Added");
          setTitle("");
          setSummery("");
          setContent("");
          setImage("");
          setStatus(true);
          setValidated(false);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // const router = useRouter();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  // const loading = useSelector((state) => state.auth.loading);

  // if (typeof window !== "undefined" && !loading && !isAuthenticated)
  //   router.push("/login");

  return (
    <>
      <div className="body">
        <div className="container1">
          <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">Add News</h2>
            <Form noValidate validated={validated} onSubmit={addNews}>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  News Title{" "}
                </label>
                <input
                  type="text"
                  required
                  minLength="2"
                  value={title}
                  className="form-control"
                  placeholder="Enter News Title"
                  id="newsTitle"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Item Name
                </Form.Control.Feedback>
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Summery{" "}
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Summarize your news"
                  id="summery"
                  value={summery}
                  onChange={(e) => {
                    setSummery(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Price
                </Form.Control.Feedback>
              </div>
              <div className="row">
                <div
                  className="form-group col-md-8"
                  style={{ marginBottom: "15px" }}
                >
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Image{" "}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Image Url"
                    id="image"
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Image Url
                  </Form.Control.Feedback>
                </div>
                <div
                  className="form-group col-md-4 text-center m-auto"
                  style={{ marginBottom: "15px" }}
                >
                  <select
                    className=" btn btn-secondary btn-sm dropdown-toggle rounded-3 bg-color-white"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option disabled hidden>
                      Select your option
                    </option>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Add News Content{" "}
                </label>
                <CKEditor
                  editor={Editor}
                  data={content}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setContent(data);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-blue btn-block"
                style={{ marginTop: "15px", marginBottom: "15px" }}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Save
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNews;
