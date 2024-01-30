import { FC } from "react";
import { TProps } from "./type";

export const ToolbarContainer: FC<TProps> = (props) => {
  const { position, children } = props;
  return (
    <div
      className={`flex items-center gap-2 ${position === "left" ? "justify-start" : "justify-end"} my-4 `}
    >
      {children}
    </div>
  );
};
