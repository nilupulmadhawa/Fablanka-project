import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { request_refresh } from "../actions/auth";
import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterContainer from "../components/footer";

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
      <FooterContainer />
    </>
  );
};

Layout.defaultProps = {
  title: "httpOnly Auth",
  content:
    "Tutorial for showing you how to use httpOnly cookies for storing json web tokens",
};

export default Layout;