import { AppHeader, LeftSide } from "@/components";
import { TMainLayout } from "@/layouts";
import { MainLayoutProvider } from "@/layouts/context";
import { FC } from "react";

export const MainLayout: FC<TMainLayout> = ({ children }) => {
  return (
    <MainLayoutProvider>
      <div className="fixed bottom-0 top-0 flex w-full gap-0 ">
        <LeftSide />

        <div className="flex-grow bg-gray-100">
          {/* App Header */}
          <AppHeader />
          {children}
        </div>
      </div>
    </MainLayoutProvider>
  );
};
