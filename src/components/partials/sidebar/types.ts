import { IconType } from "react-icons";

export type TSidebarItem = {
  id: number;
  title: string;
  link: string;
  icon: IconType;
  children?: TSidebarItem[];
};
