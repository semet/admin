import { FC } from "react";
import { ToggleSidebar, UserMenu } from "@/components/partials";

export const AppHeader: FC = () => {
  return (
    <header className="sticky top-0 flex h-[60px] items-center justify-between bg-gray-50 px-4 shadow-sm">
      <ToggleSidebar />
      <UserMenu />
    </header>
  );
};
