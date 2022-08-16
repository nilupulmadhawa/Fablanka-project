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
              <a href="#">
                <div className={Styles.card_inner}>
                  <img src={curElem.avatar_url} />
                  <div className={Styles.userName}>{curElem.login}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default OurTeam;
