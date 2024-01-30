import { AppLogo, Sidebar } from "@/components";
import { useMainLayoutContext } from "@/layouts";
import { FC } from "react";

export const LeftSide: FC = () => {
  const { isSidebarOpen } = useMainLayoutContext();
  return (
    <div
      className={`bg-gray-800 ${isSidebarOpen ? "w-[250px]" : "w-[100px]"} transition-all duration-500`}
    >
      {/* App Logo */}
      <AppLogo />
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};
