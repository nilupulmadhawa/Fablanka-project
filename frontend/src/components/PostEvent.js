import React from "react";
import Slider from "react-slick";
import { data } from "./data.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./PostEvent.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const PostEvent = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      <div className="container-fluid p-5">
        <Slider {...settings} className={styles.card_container}>
          {data.map((item, index) => (
            <div className={`card_container px-sm-2 ${styles.card_container}`}>
              <Card key={index}>
                <Card.Body className="col-sm-12">
                  <Card.Img
                    className="img-fluid rounded-3 m-0"
                    variant="top"
                    src="https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg"
                  />
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PostEvent;
