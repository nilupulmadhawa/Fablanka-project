import React from "react";
import Slider from "react-slick";

const NewAlert = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="card__container">
      <h2>News</h2>
      <Slider {...settings} className="card__container--inner">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, index) => {
          return (
            <div key={index} className="card__container--inner--card">
              <div className="card">
                <div className="card-body row">
                  <div className="col-sm-4 my-auto">
                    <img
                      className="card-img img-fluid"
                      src="https://eps.leeds.ac.uk/images/800x400_manufacturing_lab_min.jpg"
                    />
                  </div>
                  <div className="col-sm-6 f-l">
                    <h6 className="card-title">Special title treatment</h6>
                    <a
                      href="#"
                      className="btn btn-primary btn-sm"
                      role="button"
                    >
                      click here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default NewAlert;
