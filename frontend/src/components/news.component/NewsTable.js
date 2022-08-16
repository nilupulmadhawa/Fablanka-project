import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "../data";
import { API_URL } from '../../config/index';

const NewsTable = () => {
  const [news, setNews] = useState([]);
  // const [status, setStatus] = useState("");

  //check setStatus using console.log(status)

  // useEffect(() => {
  //   console.log(setStatus);
  //   getNews();
  // }, []);

  // const [status, setStatus] = useState(isChacked);

  const getNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/newspage/`);
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  // using isCheck function and update the status in database
  const onChange = (id, status) => {
    console.log(id, status);
    axios.get(`${API_URL}/api/newspage/${id}`).then((res) => {
      // console.log(res.data);
      console.log(res.data.title);
    });
    //if status is true then set status to false
    //if status is false then set status to true

    if (status) {
      status = false;
    } else {
      status = true;
    }
    const news = {
      status: status,
    };
    console.log(news);
    console.log(status);
    axios
      .put(`http://localhost:8000/api/newspage/${id}/`, news)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // const news = {
    //   id: id,
    // };
    // axios
    //   .put(`http://localhost:8000/api/newspage/${id}/`, news)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const onDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this news? This action cannot be undone."
      )
    ) {
      try {
        await axios.delete(`http://localhost:8000/api/newspage/${id}`);
        getNews();
      } catch (error) {
        console.log(error);
      }
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
                    <select
                      onChange={() => onChange(curElem.id, curElem.status)}
                      defaultValue={curElem.status}
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </td>
                  <td className="text-center">
                    <div class="btn-group-vertical">
                      <Link href={"/admin/news/" + curElem.id}>
                        <button className="btn btn-warning">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          onDelete(curElem.id);
                        }}
                      >
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
