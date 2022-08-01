import Head from "next/head";
import Navbar from "../components/Navbar";

const Layout = ({ title, content, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
};

Layout.defaultProps = {
  title: "My Next App",
  content: "This is the content of the page",
};

export default Layout;
