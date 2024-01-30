import { useMainLayoutContext } from "@/layouts";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { sidebarItems } from "./data";

export const Sidebar: FC = () => {
  const { isShowMenuLabel } = useMainLayoutContext();
  const { pathname } = useRouter();
  const isActive = (link: string) => pathname === link;
  return (
    <aside>
      <ul
        className={`mt-6 flex flex-col ${isShowMenuLabel ? "items-start" : "items-center"}`}
      >
        {sidebarItems.map((item, index) => (
          <li key={item.id} className="w-full">
            <Link
              href={item.link}
              className={`flex items-center gap-2 py-4 text-gray-100 transition-colors duration-300 hover:bg-gray-700 hover:text-gray-50 ${isActive(item.link) ? "bg-gray-700 text-gray-50" : ""}  ${isShowMenuLabel ? "justify-start pl-4" : "justify-center pl-0"}`}
            >
              <item.icon className="text-lg" />
              {isShowMenuLabel && (
                <span className="text-base font-normal">{item.title}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
