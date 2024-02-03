import { PostWrapper } from "@/features/post";
import { MainLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

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

const Post: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Manage post</title>
      </Head>
      <PostWrapper />
    </>
  );
};

Post.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Post;
