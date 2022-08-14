import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../../hocs/Layout";
import axios from "axios";
import dynamic from "next/dynamic";
// import EditNews from "../../../components/news.component/EditNews";

const EditNews = dynamic(
  () => import("../../../components/news.component/EditNews"),
  {
    ssr: false,
  }
);

const editnews = (newsID) => {
  // const router = useRouter();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  // const loading = useSelector((state) => state.auth.loading);

  // if (typeof window !== "undefined" && !loading && !isAuthenticated)
  //   router.push("/login");
  return (
    <div>
      <Layout title="FabLanka | News" content="Dashboard page">
        <div className="container mb-10">
          <EditNews id={newsID} />
        </div>
      </Layout>
    </div>
  );
};

//return newsID from params
editnews.getInitialProps = async (context) => {
  const newsID = context.query.id;
  return { newsID };
};

export default editnews;
