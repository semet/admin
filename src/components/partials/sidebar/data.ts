import { generateId } from "@/utils";
import { FaHome, FaList } from "react-icons/fa";
import { TSidebarItem } from "./types";

export const sidebarItems: TSidebarItem[] = [
  {
    id: generateId(),
    link: "/",
    title: "Home",
    icon: FaHome,
  },
  {
    id: generateId(),
    link: "/categories",
    title: "Categories",
    icon: FaList,
  },
];
