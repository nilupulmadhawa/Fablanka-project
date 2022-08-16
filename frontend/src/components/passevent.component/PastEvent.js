import React from "react";
import Slider from "react-slick";
import { data } from "../data.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HomeWrapper } from "../style";
import styles from "./PastEvent.module.css";
import { API_URL } from '../../config/index';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const PostEvent = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 2,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid px-5 pb-5 pt-3 rounded-3 shadow bg-white mb-5">
        <h1 className="text-center pb-3 text-3xl">Past Event</h1>
        <HomeWrapper>
          <Slider {...settings} className={styles.card_container}>
            {data.map((item, index) => (
              <div className="px-sm-2">
                <MDBCard className="shadow-none">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                      position="top"
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </Slider>
        </HomeWrapper>
      </div>
    </>
  );
};

export default PostEvent;
