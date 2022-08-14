import React, { useEffect, useState } from "react";
import Link from "next/link";
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
        {users.map((curElem) => {
          return (
            <div className={Styles.card_item} key={curElem.id}>
              <div className={Styles.card_inner}>
                <img src={curElem.avatar_url} alt="" />
                <div className={Styles.userName}>{curElem.login}</div>
                <div className={Styles.userUrl}>
                  <p>{}</p>
                </div>
                <a href={`/about/[id]`} as={`/about/${curElem.id}`}>
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
