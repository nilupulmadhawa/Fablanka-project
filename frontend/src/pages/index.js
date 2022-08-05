import Layout from "../hocs/Layout";
import ImageSlider from "../components/ImageSlider";
import NewAlert from "../components/NewAlert";
import PostEvent from "../components/PostEvent";
import Link from "next/link";

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
      <div className="row bg-light rounded-3">
        <div className="col-md-8">
          <ImageSlider />
          <div className="row mt-2 ">
            <p className="text-left col-md-12 ">
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
          <div className="pb-4 pt-2 px-4 bg-light rounded-3">
            {/* <Link href="/#" className="d-none d-lg-block">
              Click to news
            </Link> */}
            <NewAlert />
          </div>
        </div>
      </div>
      <div className="row mt-5 p-2 bg-light rounded-3">
        <PostEvent />
      </div>
    </Layout>
  );
};

export default homePage;
