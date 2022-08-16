import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";
import { HomeWrapper } from "../style";
import style from "../../styles/NewAlert.module.css";
import { API_URL } from "../../config/index";

const NewAlert = () => {
  const [news, setNews] = useState([]);
  // const [status, setStatus] = useState(isChacked);

  const getNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/newspage/`);
      //only status is true data will be shown
      setNews(response.data.filter((item) => item.status === true)); //only status is true data will be shown
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
    infinite: true,
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
        breakpoint: 1290,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
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
      <div className={`container ${style.container}`}>
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

                    <div className="col-sm-9 p-0 m-0 ">
                      <a href={"/news/" + curElem.id} className="no-underline hover:underline">
                        <div className="card-body p-0 m-0">
                          <p className="card-title text-sm text-black">
                            {curElem.title}
                          </p>
                          <p className="card-text lh-1 text-xs text-slate-500">
                            {curElem.summery}
                          </p>
                        </div>
                      </a>
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
