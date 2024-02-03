import { CreatePostWrapper } from "@/features/post";
import { MainLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";
import Head from "next/head";
import React from "react";

const CreatePost: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create post</title>
      </Head>
      <CreatePostWrapper />
    </>
  );
};

CreatePost.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default CreatePost;
