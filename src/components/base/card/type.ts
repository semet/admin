import React from "react";

export type TProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  title?: string;
};
