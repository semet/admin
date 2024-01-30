import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="absolute bottom-0 left-0 flex w-full justify-center bg-gray-200 py-2">
      <span className="text-sm text-gray-500 ">
        &copy; {new Date().getFullYear().toString()} Hamdani
      </span>
    </div>
  );
};
