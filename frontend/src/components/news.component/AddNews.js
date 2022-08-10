import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
// import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";

const AddNews = () => {
  const [validated, setValidated] = useState(false);

  const [newsTitile, setNewsTitile] = useState("");
  const [summery, setSummery] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [image, setImage] = useState("");

  function addNews(e) {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const newNews = {
        newsTitile,
        summery,
        newsContent,
        image,
      };

      axios
        .post("/#", newNews)
        .then(() => {
          alert("New News Added");
          setNewsTitile("");
          setSummery("");
          setNewsContent("");
          setImage("");
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
      {/* <div className="container-fluid mb-10 ">
        <h2 className="display-5 fs-1 fw-normal">Add News</h2>
        <div className="row">
          <div className="col-md-12 mb-3">
            <label className="fs-4">News Title</label>
            <input type="text" className="form-control" placeholder="Title" />
          </div>
          <div className="col-md-12 mb-3">
            <label className="fs-4">Summery</label>
            <input type="text" className="form-control" placeholder="Summery" />
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <label className="fs-4">News Content</label>
          <CKEditor
            editor={ClassicEditor}
            // data={newsContent}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.setState({ newsContent: data });
              //   console.log({ event, editor, data });
            }}
          />
        </div>
        <div className="col-md-12 mb-3">
          <label className="fs-4">Image</label>
          <input type="file" className="form-control" placeholder="" />
        </div>
        <div className="col-md-12 mb-3">
          <button className="btn btn-primary ">Add News</button>
        </div>
      </div> */}

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
                  value={newsTitile}
                  className="form-control"
                  placeholder="Enter News Title"
                  id="newsTitle"
                  onChange={(e) => {
                    setNewsTitile(e.target.value);
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
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Add News Content{" "}
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data={newsContent}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setNewsContent(data);
                    //   console.log({ event, editor, data });
                  }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Image{" "}
                </label>
                <input
                  type="file"
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

export default AddNews;
