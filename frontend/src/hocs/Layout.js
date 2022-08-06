import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { request_refresh } from "../actions/auth";
import Head from "next/head";
// import Navbar from "../components/Navbar";
// import Footer from "../components/footer";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../components/footer"), {
  ssr: false,
});

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

const Layout = ({ title, content, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(request_refresh());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <Navbar />
      <div className="container-fluid px-5 mt-5">{children}</div>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "FabLanka",
  content: "FabLanka",
};

export default Layout;
