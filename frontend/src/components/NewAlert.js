import React from "react";
import Slider from "react-slick";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import { HomeWrapper } from "../components/style";

const NewAlert = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
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
                <div className="container-sm px-1">
                  <MDBRow kay={index}>
                    <MDBCol>
                      <MDBCard className="">
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
                  </MDBRow>
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
