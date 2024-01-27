import { useMainLayoutContext } from "@/layouts";
import { FC } from "react";

export const AppLogo: FC = () => {
  const { logo, isShowMenuLabel } = useMainLayoutContext();

  return (
    <div
      className={`flex h-[70px] items-center bg-gray-900 ${isShowMenuLabel ? "justify-start" : "justify-center"}`}
    >
      <span
        className={`text-2xl font-semibold tracking-wider text-white ${isShowMenuLabel ? "pl-4 " : "pl-0"}`}
      >
        {logo}
      </span>
    </div>
  );
};
