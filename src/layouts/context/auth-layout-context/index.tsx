import { TAuthLayoutContext } from "@/layouts";
import { FC, ReactNode, createContext, useContext } from "react";

const AuthLayoutContext = createContext<TAuthLayoutContext | null>(null);

const AuthLayoutProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const values = {};

  return (
    <AuthLayoutContext.Provider value={values}>
      {children}
    </AuthLayoutContext.Provider>
  );
};

const useAuthLayoutContext = () => {
  const context = useContext(AuthLayoutContext);

  if (context === null) {
    throw new Error(
      "useAuthLayoutContext must be used within AuthLayoutContextProvider",
    );
  }
  return context;
};

export { AuthLayoutProvider, useAuthLayoutContext };
