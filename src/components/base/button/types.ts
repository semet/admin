import { TVarian } from "@/types";

export type TProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TVarian;
  size?: "sm" | "md" | "lg";
};
