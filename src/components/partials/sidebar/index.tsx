import { useMainLayoutContext } from "@/layouts";
import Link from "next/link";
import { FC } from "react";
import { sidebarItems } from "./data";

export const Sidebar: FC = () => {
  const { isShowMenuLabel } = useMainLayoutContext();

  return (
    <aside>
      <ul
        className={`mt-6 flex flex-col ${isShowMenuLabel ? "items-start" : "items-center"}`}
      >
        {sidebarItems.map((item, index) => (
          <li key={item.id} className="w-full">
            <Link
              href={item.link}
              className={`flex items-start gap-2 py-4 text-gray-100 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-800 ${isShowMenuLabel ? "justify-start pl-4" : "justify-center pl-0"}`}
            >
              <item.icon className="text-2xl" />
              {isShowMenuLabel && <span className="text-xl">{item.title}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
