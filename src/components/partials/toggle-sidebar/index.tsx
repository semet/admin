import { useMainLayoutContext } from "@/layouts";
import { FC, useEffect, useState } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa";

export const ToggleSidebar: FC = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useMainLayoutContext();
  const [icons, setIcons] = useState<JSX.Element>(<FaBars />);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIcons(isSidebarOpen ? <FaBars /> : <FaChevronRight />);
    }, 200);

    return () => clearTimeout(timer);
  }, [isSidebarOpen]);
  return (
    <button
      className="text-3xl text-gray-400 hover:text-gray-700"
      onClick={() => setIsSidebarOpen((prev) => !prev)}
    >
      {icons}
    </button>
  );
};
