import { MainLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const Home: NextPageWithLayout = () => {
  const { data } = useSession();

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div></div>;
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
