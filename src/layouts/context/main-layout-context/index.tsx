import { TLogo, TMainLayoutContext } from "@/layouts";
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const MainLayoutContext = createContext<TMainLayoutContext | null>(null);

const MainLayoutProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [logo, setLogo] = useState<TLogo>("Hamdani");
  const [isShowMenuLabel, setIsShowMenuLabel] = useState(false);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    logo,
    setLogo,
    isShowMenuLabel,
    setIsShowMenuLabel,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogo(isSidebarOpen ? "Hamdani" : "H");
    }, 200);

    return () => clearTimeout(timer);
  }, [isSidebarOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowMenuLabel((prev) => !prev);
    }, 200);

    return () => clearTimeout(timer);
  }, [isSidebarOpen]);

  return (
    <MainLayoutContext.Provider value={values}>
      {children}
    </MainLayoutContext.Provider>
  );
};

const useMainLayoutContext = () => {
  const context = useContext(MainLayoutContext);

  if (context === null) {
    throw new Error(
      "useMainLayoutContext must be used within MainLayoutContextProvider",
    );
  }
  return context;
};

export { MainLayoutProvider, useMainLayoutContext };
