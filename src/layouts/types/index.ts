import { Dispatch, SetStateAction } from "react";

export type TMainLayout = {
  children: React.ReactNode;
};

export type TMainLayoutContext = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  logo: TLogo;
  setLogo: Dispatch<SetStateAction<TLogo>>;
  isShowMenuLabel: boolean;
  setIsShowMenuLabel: Dispatch<SetStateAction<boolean>>;
};

export type TLogo = "Hamdani" | "H";

//Auth Layout
export type TAuthLayout = {
  children: React.ReactNode;
};
export type TAuthLayoutContext = {};
