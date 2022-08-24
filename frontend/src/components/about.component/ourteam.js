import React, { useEffect, useState } from "react";
import Link from "next/link";
import Styles from "../../styles/ourteam.module.css";
import { dataourteam } from "../data_ourteam";

const OurTeam = () => {
  return (
    <>
      <div className={Styles.container}>
        {dataourteam.map((curElem) => {
          return (
            <div className={Styles.card_item} key={curElem.id}>
              <a href="#">
                <div className={Styles.card_inner}>
                  <img src={curElem.image} />
                  <div className={Styles.userName}>{curElem.name}</div>
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
