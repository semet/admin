import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { TProps } from "./type";

export const Card: FC<TProps> = (props) => {
  const { children, title, className, ...rest } = props;
  return (
    <div
      className={twMerge(
        "flex w-full flex-col gap-4 rounded-md bg-white py-3 shadow-sm",
        className,
      )}
      {...rest}
    >
      {title && (
        <h2 className="mb-3 border-b px-4 pb-3 text-lg text-gray-600">
          {title}
        </h2>
      )}
      <div className="px-4 ">{children}</div>
    </div>
  );
};
