import { CategoryWrapper } from "@/features/category";
import { MainLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
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

const Category: NextPageWithLayout = () => {
  const { data } = useSession();

  return (
    <>
      <Head>
        <title>Manage category</title>
      </Head>
      <CategoryWrapper />
    </>
  );
};

Category.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Category;
