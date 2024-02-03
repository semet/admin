import { LoginForm } from "@/features/auth";
import { AuthLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";
import Head from "next/head";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

Login.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;
export default Login;
