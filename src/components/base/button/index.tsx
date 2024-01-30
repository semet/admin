import React from "react";
import { twMerge } from "tailwind-merge";
import { TProps } from "./types";

export const Button = React.forwardRef<HTMLButtonElement, TProps>(
  (props, ref) => {
    const { className, disabled, children, variant, size, ...rest } = props;
    return (
      <button
        ref={ref}
        className={twMerge(
          `flex items-center gap-1.5 rounded-md px-4 py-2 font-light tracking-wide shadow-md transition-all duration-300 ${
            variant === "primary"
              ? "bg-blue-600 text-gray-100 hover:bg-blue-700 hover:text-white disabled:cursor-not-allowed disabled:bg-blue-400 disabled:text-gray-200"
              : variant === "secondary"
                ? "bg-gray-600 text-gray-100 hover:bg-gray-700 hover:text-white"
                : variant === "error"
                  ? "bg-red-500 text-gray-200 hover:bg-red-600 hover:text-white"
                  : variant === "success"
                    ? "bg-green-600 text-gray-200 hover:bg-emerald-700 hover:text-white"
                    : ""
          }
          ${
            size === "sm"
              ? "text-sm"
              : size === "md"
                ? "text-lg"
                : size === "lg"
                  ? "text-xl"
                  : "text-base"
          }`,
          className,
        )}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
