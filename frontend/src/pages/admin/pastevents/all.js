import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../../hocs/Layout";
import NewsTable from "../../../components/pastevent.component/PastEventTable";

const AllEvents = () => {
  const router = useRouter();
  console.log(router.pathname);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (typeof window !== "undefined" && !loading && !isAuthenticated);

  //if refresh page, redirect to router.pathname

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

export default AllEvents;