// news edit component

import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import Editor from "ckeditor5-custom-build/build/ckeditor";
import axios from "axios";
import { API_URL } from "../../config/index";

const EditNews = (props) => {
  const id = props.id.newsID;

  //get the id from the url

  //validation state
  const [validated, setValidated] = useState(false);
  //set all data to the state
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(true);

  //get the news from the database and set the data to the state using use effect

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/newspage/${id}`);
        setTitle(response.data.title);
        setSummery(response.data.summery);
        setContent(response.data.content);
        setImage(response.data.image);
        setStatus(response.data.status);
      } catch (err) {
        console.log(err);
      }
    };
    getNews();
  }, []);

  //update the news in the database

  //set update news data to the state
  // const onChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   if (name === "title") {
  //     setTitle(value);
  //   } else if (name === "summery") {
  //     setSummery(value);
  //   } else if (name === "content") {
  //     setContent(value);
  //   } else if (name === "image") {
  //     setImage(value);
  //   } else if (name === "status") {
  //     setStatus(value);
  //   }
  // };

  // update news data to the database
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const news = {
        title: title,
        summery: summery,
        content: content,
        image: image,
        status: status,
      };
      console.log(news);
      axios
        .put(`http://localhost:8000/api/newspage/${id}/`, news)
        .then((res) => {
          console.log(res);
          window.location.href = "/admin/news/all";
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setValidated(true);
  };

  // function editNews(e) {
  //   const form = e.currentTarget;

  //   if (form.checkValidity() === false) {
  //     e.preventDefault();

  //     setValidated(true);
  //     e.stopPropagation();
  //   } else {
  //     e.preventDefault();

  //     const news = {
  //       title,
  //       summery,
  //       content,
  //       image,
  //       status,
  //     };

  //     axios
  //       .put(`http://localhost:8000/api/newspage/${props.id}/`, news)
  //       .then(() => {
  //         alert("New News Added");
  //         setTitle("");
  //         setSummery("");
  //         setContent("");
  //         setImage("");
  //         setStatus(true);
  //         setValidated(false);
  //       })
  //       .catch((err) => {
  //         alert(err);
  //       });
  //   }
  // }

  return (
    <>
      <div className="body">
        <div className="container1">
          <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">
              Edit News
            </h2>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  News Title
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

              <Button
                type="submit"
                className="btn btn-success float-right"
                style={{ marginTop: "15px", marginBottom: "15px" }}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Save
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditNews;
