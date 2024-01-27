import { TextField } from "@/components/inputs";
import { AuthLayoutProvider } from "@/layouts";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { schema } from "./validation";

export const LoginForm: FC = () => {
  const { push } = useRouter();
  const formMethod = useForm({
    resolver: zodResolver(schema),
  });
  const { handleSubmit, register } = formMethod;
  const onSubmit = handleSubmit(async (data) => {
    await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
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
  });
  return (
    <AuthLayoutProvider>
      <FormProvider {...formMethod}>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextField
            label="Email"
            name="email"
            type="text"
            required
            placeholder="email address"
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            required
            placeholder="password"
          />

          <button
            type="submit"
            className="rounded-md bg-blue-500 py-2 text-gray-200 transition-colors duration-300 hover:bg-blue-700 hover:text-white"
          >
            Login
          </button>
        </form>
      </FormProvider>
    </AuthLayoutProvider>
  );
};
