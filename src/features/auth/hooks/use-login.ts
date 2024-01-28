import { TLogin } from "@/features/auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const useLogin = () => {
  const { push } = useRouter();
  const login = async (params: TLogin) => {
    const { email, password } = params;
    await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    }).then((res) => {
      if (res?.ok) {
        toast.success("Login success");
        setTimeout(() => {
          push("/");
        }, 2000);
      }
      if (res?.error) {
        toast.error("Login failed");
      }
    });
  };

  return {
    login,
  };
};
