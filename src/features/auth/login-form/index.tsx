import { TextField } from "@/components/inputs";
import { useLogin } from "@/features/auth";
import { AuthLayoutProvider } from "@/layouts";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { schema } from "./validation";

export const LoginForm: FC = () => {
  const { login } = useLogin();
  const formMethod = useForm({
    resolver: zodResolver(schema),
  });
  const { handleSubmit, register } = formMethod;
  const onSubmit = handleSubmit(async (data) => {
    await login({
      email: data.email,
      password: data.password,
      remember: false,
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
