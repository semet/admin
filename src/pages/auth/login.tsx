import { LoginForm } from "@/features";
import { AuthLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";

const Login: NextPageWithLayout = () => {
  return <LoginForm />;
};

Login.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;
export default Login;
