import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { data } from "../data.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HomeWrapper } from "../style";
import styles from "../pastevent.component/PastEvent.module.css";
import { API_URL } from "../../config/index";

const PostEvent = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid px-5 pb-5 pt-3 rounded-3 shadow bg-white mb-5">
        <h1 className="text-center pb-3 text-3xl text-[#205DA1]">Our Project</h1>
        <HomeWrapper>
          <Slider {...settings} className={styles.card_container}>
            {data.map((item, index) => (
              <div className="p-7 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:auto md:h-48 w-full object-cover object-center hover:scale-125 duration-300 ease-in-out"
                    src="https://picsum.photos/id/1016/720/400"
                    alt="blog"
                  />
                  <Link href="/blog/[id]" as={`/blog/${item.id}`}>
                    <div className="p-6 hover:bg-[#243f5e] hover:text-white transition duration-300 ease-in">
                      <h1 className="sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3">
                        Mountains are alone
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam modi, expedita quos doloremque autem ipsum
                        itaque incidunt ipsam reprehenderit fuga! Dolores
                        quisquam eius cum accusamus?
                      </p>
                      <div className="flex items-center flex-wrap ">
                        {/* <h2 className="text-base text-right font-medium text-indigo-300 md:mb-2 lg:mb-0">
                          October 29, 2021
                        </h2> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </HomeWrapper>
      </div>
    </>
  );
};

export default PostEvent;
