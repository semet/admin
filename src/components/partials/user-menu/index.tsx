import { Popover } from "@/components/base";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

export const UserMenu: FC = () => {
  const { data } = useSession();
  const { push } = useRouter();
  const logOut = () => {
    signOut({
      redirect: false,
    });
    toast.success("You have been logged out");
    setTimeout(() => {
      push("/auth/login");
    }, 1000);
  };
  return (
    <Popover title={data?.user?.name}>
      <ul className="flex min-w-32 flex-col divide-y divide-gray-100 [&>*:first-child]:mt-2 [&>*:last-child]:mb-2">
        <li className=" px-3.5 py-2.5 text-gray-600 hover:bg-slate-200 hover:text-gray-800">
          <Link href="#" className="flex items-center">
            <FaUser className="text-lg" />
            <span className="ml-2">Profile</span>
          </Link>
        </li>
        <li className="px-3.5 py-2.5 text-gray-600 hover:bg-slate-200 hover:text-gray-800">
          <Link href="#" className="flex items-center">
            <FaCog className="text-lg" />
            <span className="ml-2">Settings</span>
          </Link>
        </li>
        <li className="px-3.5 py-2.5 text-gray-600 hover:bg-slate-200 hover:text-gray-800">
          <button className="flex items-center" onClick={() => logOut()}>
            <FaSignOutAlt className="text-lg" />
            <span className="ml-2">Logout</span>
          </button>
        </li>
      </ul>
    </Popover>
  );
};
