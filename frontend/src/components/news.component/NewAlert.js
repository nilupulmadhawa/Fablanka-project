import React from "react";
import Slider from "react-slick";
import { HomeWrapper } from "../style";

const NewAlert = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    adaptiveHeight: false,
    variableHeight: true,
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
              (item, index) => {
                return (
                  <div
                    className="card mb-3 border-0 shadow-none border-top my-2 "
                    style="width: 18rem;"
                    key={index}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-3 m-0 pr-2">
                        <img
                          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                          className="card-img"
                          alt="..."
                        />
                      </div>

                      <div className="col-md-9 p-0 m-0">
                        <div className="card-body p-0 m-0">
                          <p className="card-title fs-6 m-0">
                            <small>
                              <a href="#">News Alert Title</a>
                            </small>
                          </p>
                          <p className="card-text fs-6">
                            <small>
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content.
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </Slider>
        </HomeWrapper>
      </div>
    </>
  );
};

export default NewAlert;
