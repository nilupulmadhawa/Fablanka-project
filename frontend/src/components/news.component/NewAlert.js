import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";
import { HomeWrapper } from "../style";

const NewAlert = () => {
  const [news, setNews] = useState([]);
  // const [status, setStatus] = useState(isChacked);

  const getNews = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/newspage/");
      setNews(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
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
    // adaptiveHeight: false,
    // variableHeight: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <div className="container">
        <HomeWrapper>
          {/* <h2 className="text-center">News</h2> */}
          <Slider {...settings} className="m-1 mt-2 py-2">
            {news.map((curElem) => {
              return (
                <div
                  className="card mb-3 border-0 shadow-none border-top my-2 "
                  style="width: 18rem;"
                  key={curElem.id}
                >
                  <div className="row no-gutters">
                    <div className="col-sm-3 m-0 pr-2">
                      <img src={curElem.image} className="card-img" alt="..." />
                    </div>

                    <div className="col-sm-9 p-0 m-0">
                      <div className="card-body p-0 m-0">
                        <p className="card-title fs-6 m-0 fw-normal">
                          <small>
                            <Link href={"/news/" + curElem.id}>
                              {curElem.title}
                            </Link>
                          </small>
                        </p>
                        <p className="card-text fs-6 lh-1 fw-light">
                          <small>{curElem.summery}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </HomeWrapper>
      </div>
    </>
  );
};

export default NewAlert;
