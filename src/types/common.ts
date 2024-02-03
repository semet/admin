import { NextPage } from "next";
import { AppProps } from "next/app";
import { ComponentType, ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type TDrawer = {
  isOpenDrawerCreate: boolean;
  toggleDrawerCreate: () => void;
  isOpenDrawerUpdate: boolean;
  toggleDrawerUpdate: () => void;
};
