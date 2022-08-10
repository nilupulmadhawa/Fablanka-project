import React, { useEffect, useState } from "react";
import Styles from "../../styles/ourteam.module.css";

const OurTeam = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className={Styles.container}>
        {/* <p className="d-flex justify-content-center h2 mb-3">Our Team</p>
        {users.map((curElem) => {
          return (
            <div
              className={`card col-sm ${Styles.card}`}
              style={{ width: "18rem" }}
              key={curElem.id}
            >
              <img
                src={curElem.avatar_url}
                className={`card-img-top ${Styles.card_img}`}
                alt=""
              />
              <div className="card-body">
                <h5 className={`card-title ${Styles.card_title}`}>
                  {curElem.login}
                </h5>
                <p className="card-text">User Description</p>
                <a href={curElem.url} className={`btn ${Styles.btn}`}>
                  Know More
                </a>
              </div>
            </div>
          );
        })} */}
        {users.map((curElem) => {
          return (
            <div className={Styles.card_item} key={curElem.id}>
              <div className={Styles.card_inner}>
                <img src={curElem.avatar_url} alt="" />
                <div className={Styles.userName}>{curElem.login}</div>
                <div className={Styles.userUrl}>
                  <p>{}</p>
                </div>
                <a href={curElem.url}>
                  <button className={Styles.seeMore}>See More</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default OurTeam;
