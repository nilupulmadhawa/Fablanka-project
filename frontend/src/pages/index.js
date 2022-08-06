import Layout from "../hocs/Layout";
import ImageSlider from "../components/ImageSlider";
// import NewAlert from "../components/NewAlert";
// import PostEvent from "../components/PostEvent";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "../styles/index.module.css";

const PostEvent = dynamic(() => import("../components/PostEvent"), {
  ssr: false,
});

const NewAlert = dynamic(() => import("../components/NewAlert"), {
  ssr: false,
});

const homePage = () => {
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
      {/* <div className=".container-xxl"> */}
      <div className="row">
        <div className="col-md-8 rounded-3">
          <ImageSlider />
          <div className="row mt-2 ">
            <p className="text-left col-md-12">
              <small>
                This line of text is meant to be treated as fine print.This line
                of text is meant to be treated as fine print.This line of text
                is meant to be treated as fine print.This line of text is meant
                to be treated as fine print.This line of text is meant to be
                treated as fine print.This line of text is meant to be treated
                as fine print.This line of text is meant to be treated as fine
                print.This line of text is meant to be treated as fine
                print.This line of text is meant to be treated as fine
                print.This line of text is meant to be treated as fine print.
                This line of text is meant to be treated as fine print.This line
                of text is meant to be treated as fine print.This line of text
                is meant to be treated as fine print.This line of text is meant
                to be treated as fine print.This line of text is meant to be
                treated as fine print.This line of text is meant to be treated
                as fine print.This line of text is meant to be treated as fine
                print.This line of text is meant to be treated as fine
                print.This line of text is meant to be treated as fine
                print.This line of text is meant to be treated as fine print.
              </small>
            </p>
          </div>
          <div className="d-none d-sm-block d-md-none">
            <a href="/#" role="button" aria-disabled="true">
              CLick here
            </a>
          </div>
        </div>
        <div className="col-md-4 d-none d-sm-block">
          <div
            className={`pb-4 pt-2 px-4 rounded-3 shadow bg-white ${styles.bg}`}
          >
            {/* <Link href="/#" className="d-none d-lg-block">
              Click to news
            </Link> */}
            <NewAlert />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <p>
          This line of text is meant to be treated as fine print.This line of
          text is meant to be treated as fine print.This line of text is meant
          to be treated as fine print.This line of text is meant to be treated
          as fine print.This line of text is meant to be treated as fine
          print.This line of text is meant to be treated as fine print.This line
          of text is meant to be treated as fine print.This line of text is
          meant to be treated as fine print.This line of text is meant to be
          treated as fine print.This line of text is meant to be treated as fine
          print. This line of text is meant to be treated as fine print.This
          line of text is meant to be treated as fine print.This line of text is
          meant to be treated as fine print.This line of text is meant to be
          treated as fine print.This line of text is meant to be treated as fine
          print.This line of text is meant to be treated as fine print.This line
          of text is meant to be treated as fine print.This line of text is
          meant to be treated as fine print.This line of text is meant to be
          treated as fine print.This line of text is meant to be treated as fine
          print.
        </p>
      </div>
      <div className="row ">
        <div className={`mb-5 mt-5 pb-4 pt-2 px-4 rounded-3 shadow bg-white `}>
          <PostEvent />
        </div>
      </div>
    </Layout>
  );
};

export default homePage;
