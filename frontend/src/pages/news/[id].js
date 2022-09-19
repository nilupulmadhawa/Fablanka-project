import React from "react";
import axios from "axios";
import Layout from "../../hocs/Layout";
import dynamic from "next/dynamic";
import { API_URL } from "../../config/index";

const SingleNews = dynamic(
  () => import("../../components/news.component/SingleNews"),
  {
    ssr: false,
  }
);

const news = (props) => {
  console.log(props.news);
  return (
    <Layout title="FabLanka | News" content="Dashboard page">
      <div>
        <SingleNews
          title={props.news?.title}
          summery={props.news?.summery}
          content={props.news?.content}
          image={props.news?.image}
        />
      </div>
    </Layout>
  );
};

export async function getStaticPaths(c) {
  // console.log(c, "sffgsgf");

  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: true,
  };
}

//getting props data from server
export async function getStaticProps(context) {
  console.log(context);
  const newsID = context.params.id;
  const response = await axios.get(`${API_URL}/api/newspage/${newsID}`);
  // console.log(response.data, "fgfsd");
  // return { news: response.data };
  return { props: { news: response.data } };
}

export default news;
