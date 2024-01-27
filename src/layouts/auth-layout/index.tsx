import { FC } from "react";
import { AuthLayoutProvider, TAuthLayout } from "..";

export const AuthLayout: FC<TAuthLayout> = ({ children }) => {
  return (
    <AuthLayoutProvider>
      <div className="min-w-1/4 absolute left-1/2 top-[20vh] w-1/4 -translate-x-1/2 transform space-y-6">
        <h1 className="text-center text-4xl tracking-tight text-gray-700">
          Login Admin
        </h1>
        <div className="flex flex-col rounded-md bg-white p-6 shadow-sm">
          {children}
        </div>
      </div>
    </AuthLayoutProvider>
  );
};
