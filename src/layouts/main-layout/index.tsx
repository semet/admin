import { AppHeader, Footer, LeftSide } from "@/components";
import { TMainLayout } from "@/layouts";
import { MainLayoutProvider } from "@/layouts/context";
import { FC } from "react";

export const MainLayout: FC<TMainLayout> = ({ children }) => {
  return (
    <MainLayoutProvider>
      <div className="flex min-h-screen w-full gap-0">
        <LeftSide />
        <div className="relative w-full bg-gray-100">
          {/* App Header */}
          <AppHeader />
          <section className="mb-6 px-4 py-6">{children}</section>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </MainLayoutProvider>
  );
};
