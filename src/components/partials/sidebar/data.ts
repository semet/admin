import { generateId } from "@/utils";
import { FaHome, FaList, FaNewspaper } from "react-icons/fa";
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
    link: "/category",
    title: "Category",
    icon: FaList,
  },
  {
    id: generateId(),
    link: "/post",
    title: "Post",
    icon: FaNewspaper,
  },
];
