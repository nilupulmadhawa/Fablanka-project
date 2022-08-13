import React from "react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const NewsTable = () => {
  const [news, setNews] = useState([]);
  const [status, setStatus] = useState(isChacked);

  const getNews = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/news/");
      setNews(response.data);
      
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const isChacked = (e) => {
    console.log(e.target.value);
    if (e.target.value === "true") {
      return "checked";
    } else {
      return "";
    }
  };

  return (
    <div className="container mb-10">
      <div class="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">News Title</th>
              <th scope="col">Summery</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {news.map((curElem) => {
            console.log(curElem.status);
            return (
              <tbody>
                <tr>
                  <th scope="row">{curElem.id}</th>
                  <td className="text-center">
                    <img src={curElem.image} width={100} height={100} />
                  </td>
                  <td>{curElem.title}</td>
                  <td>{curElem.summery}</td>
                  <td>
                    <select onChange={isChacked} value={status}>
                      <option disabled selected>
                        Select your option
                      </option>
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </td>
                  <td className="text-center">
                    <div class="btn-group-vertical">
                      <button type="button" className="btn btn-warning">
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default NewsTable;
