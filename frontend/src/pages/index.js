import Layout from "../hocs/Layout";
import ImageSlider from "../components/ImageSlider";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "../styles/index.module.css";
import axios from "axios";

const PastEvent = dynamic(
  () => import("../components/pastevent.component/PastEvent"),
  {
    ssr: false,
  }
);

const NewAlert = dynamic(
  () => import("../components/news.component/NewAlert"),
  {
    ssr: false,
  }
);

const HomePage = () => {
  const [readMore, setReadMore] = useState(false);

  //retrive data from http://dnd5eapi.co/api/conditions/blinded

  useEffect(() => {
    console.log("useEffect");
    axios.get("http://dnd5eapi.co/api/conditions/blinded").then((res) => {
      console.log(res.data, "test data");
    });

    Aos.init({ duration: 1000 });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const extraContent = (
    <div>
      <p className="extra-content mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur neque ab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.This line of text is meant to be treated as fine print.This line
        of text is meant to be treated as fine print.This line of text is meant
        to be treated as fine print.This line of text is meant to be treated as
        fine print.This line of text is meant to be treated as fine print.This
        line of text is meant to be treated as fine print.This line of text is
        meant to be treated as fine print.This line of text is meant to be
        treated as fine print.This line of text is meant to be treated as fine
        print.This line of text is meant to be treated as fine print. This line
        of text is meant to be treated as fine print.This line of text is meant
        to be treated as fine print.This line of text is meant to be treated as
        fine print.This line of text is meant to be treated as fine print.This
        line of text is meant to be treated as fine print.This line of text is
        meant to be treated as fine print.This line of text is meant to be
        treated as fine print.This line of text is meant to be treated as fine
        print.This line of text is meant to be treated as fine print.This line
        of text is meant to be treated as fine print.
      </p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  const dataTop = [
    {
      url: "https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg",
    },
  ];
  return (
    <Layout
      title="FabLanka | Home"
      content="Home page for this auth tutorial on httpOnly cookies with json web tokens"
    >
      <div className="container-fluid">
        <div className="relative">
          <div data-aos="fade-right" className="row">
            <div className="col-lg-8 rounded-3">
              <ImageSlider />
            </div>
          </div>
          <div className="row">
            <p className="text-justify col-lg-12 mt-3">
              Fab Lanka is a group of highly motivated individuals coming
              together to set up fabrication labs (fab labs) throughout Sri
              Lanka as a community outreach project. The abundance of an
              educated work force, high degree of IT usage, and existence of a
              large number of small and medium size manufactures (SMEs) makes
              Sri Lanka an ideal home for fab labs. The benefits of bringing in
              new technology is the ability to transform the manufacturing
              sector of local economies in environmentally friendly ways. In
              addition, it will also strengthen employment for youth in the 21st
              century manufacturing job sector.
            </p>
            <div className="text-justify col-lg-12 mt-3 mb-3">
              <p>
                Inspired by the technologically based social movements such as
                Open Source Ecology, FabLab, and RepRap who’s aim is to spread
                technology and knowledge to build a more equitable society,
                FabLanka aspires to provide a platform for social and economic
                development through education and technological innovation.
              </p>
              {readMore && extraContent}
              <a
                className="read-more-link mt-3"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <p className=" text-sm mt-3">
                  <samll>{linkName}</samll>
                </p>
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-4 lg:absolute top-0 right-0 lg:top-0 right-0"
            >
              <NewAlert />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <PastEvent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
