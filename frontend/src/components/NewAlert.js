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
    // <div className="card__container">
    //   <h2>News</h2>
    //   <Slider {...settings} className="card__container--inner">
    //     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, index) => {
    //       return (
    //         <div key={index} className="card__container--inner--card">
    //           <div className="card">
    //             <div className="card-body row">
    //               <div className="col-sm-4 my-auto">
    //                 <img
    //                   className="card-img img-fluid"
    //                   src="https://eps.leeds.ac.uk/images/800x400_manufacturing_lab_min.jpg"
    //                 />
    //               </div>
    //               <div className="col-sm-6 f-l">
    //                 <h6 className="card-title">Special title treatment</h6>
    //                 <a
    //                   href="#"
    //                   className="btn btn-primary btn-sm"
    //                   role="button"
    //                 >
    //                   click here
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </Slider>
    // </div>

    <>
      <div className="container">
        <h2 className="text-center">News</h2>
        <Slider {...settings} className="m-1 mt-4 py-2">
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
                    {/* <MDBCol sm="6">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                    <MDBCardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </MDBCardText>
                    <MDBBtn href="#">Go somewhere</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> */}
                  </MDBRow>
                </div>
              );
            }
          )}
        </Slider>
      </div>
    </>
  );
};

export default NewAlert;
