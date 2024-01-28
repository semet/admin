import { MainLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";
import { useSession } from "next-auth/react";

const Home: NextPageWithLayout = () => {
  const { data } = useSession();

  return <div></div>;
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
