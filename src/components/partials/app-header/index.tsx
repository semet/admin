import { FC } from "react";
import { ToggleSidebar } from "..";

export const AppHeader: FC = () => {
  return (
    <header className="sticky top-0 flex h-[60px] items-center bg-gray-50 px-4 shadow-sm">
      <ToggleSidebar />
    </header>
  );
};
