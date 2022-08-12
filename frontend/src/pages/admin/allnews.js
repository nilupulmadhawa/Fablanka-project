import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../hocs/Layout";
import NewsTable from "../../components/news.component/NewsTable";

const AllNews = () => {
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (typeof window !== "undefined" && !loading && !isAuthenticated)
    router.push("/login");

  return (
    <>
      <Layout title="FabLanka | News" content="Dashboard page">
        <div className="container mb-10">
          <NewsTable />
        </div>
      </Layout>
    </>
  );
};

export default AllNews;
