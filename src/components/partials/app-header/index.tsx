import { FC } from "react";
import { ToggleSidebar } from "..";

export const AppHeader: FC = () => {
  return (
    <header className="flex h-[70px] items-center bg-gray-50 px-4 shadow-md">
      <ToggleSidebar />
    </header>
  );
};
