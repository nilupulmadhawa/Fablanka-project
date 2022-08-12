import React from "react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const NewsTable = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get("https://api.github.com/users");
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const isChacked = (e) => {
    console.log(e.target.checked);
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
            return (
              <tbody>
                <tr>
                  <th scope="row">{curElem.id}</th>
                  <td className="text-center">
                    <img src={curElem.avatar_url} width={100} height={100} />
                  </td>
                  <td>{curElem.login}</td>
                  <td>{curElem.login}</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        onClick={isChacked}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                    </div>
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
