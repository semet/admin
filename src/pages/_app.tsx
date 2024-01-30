import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types";
import { client } from "@/utils";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { Rubik } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const font = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <main className={`relative ${font.className}`}>
      <QueryClientProvider client={client}>
        <SessionProvider session={session}>
          <ToastContainer />
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </QueryClientProvider>
    </main>
  );
}
