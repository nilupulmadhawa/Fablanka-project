import React from "react";
import Slider from "react-slick";
import { HomeWrapper } from "../style";

const NewAlert = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
          <h2 className="text-center">News</h2>
          <Slider {...settings} className="m-1 mt-2 py-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
              (item, index) => {
                return (
                  <div
                    className="card mb-3 border shadow-none"
                    style="max-width: 540px;"
                    key={index}
                  >
                    <div className="row no-gutters">
                      {/* <div className="col-md-4">
                        <img
                          src="https://via.placeholder.com/150"
                          className="card-img"
                          alt="..."
                        />
                      </div> */}
                      <div className="col-md-12">
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">News Alert Title</a>
                          </h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <div className="row g-0" kay={index}>
                      <div className="col-md-12">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div> */}
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

{
  /* <MDBRow kay={index}>
                      <MDBCol>
                        <MDBCard className="col-sm-12">
                          <MDBCardImage
                            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                            position="top"
                            alt="..."
                          />
                          <MDBCardBody>
                            <MDBCardTitle>News Title</MDBCardTitle>
                            <MDBCardText>
                              With supporting text below as a natural lead-in to
                              additional content.
                            </MDBCardText>
                            <MDBBtn href="#">Go somewhere</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow> */
}
