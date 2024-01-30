import { MainLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

const Home: NextPageWithLayout = () => {
  const { data } = useSession();

  return <div></div>;
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
