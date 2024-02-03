import { TextareaHTMLAttributes } from "react";

// generate type that extends all text area props

export type TProps = Required<
  Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, "name">
> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name"> & {
    label?: string;
  };
