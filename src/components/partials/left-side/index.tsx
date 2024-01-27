import { AppLogo, Sidebar } from "@/components";
import { useMainLayoutContext } from "@/layouts";
import { FC } from "react";

export const LeftSide: FC = () => {
  const { isSidebarOpen } = useMainLayoutContext();
  return (
    <div
      className={`${isSidebarOpen ? "min-w-[250px]" : "min-w-[100px]"} bg-gray-800 transition-all duration-500`}
    >
      {/* App Logo */}
      <AppLogo />
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};
