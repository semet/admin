import { Button, ToolbarContainer } from "@/components/base";
import { useCategoryContext } from "@/features/category";
import { FC, useRef } from "react";
import { FaPlus } from "react-icons/fa6";

export const Toolbar: FC = () => {
  const { toggleDrawerCreate } = useCategoryContext();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <ToolbarContainer position="right">
      <Button variant="success" onClick={toggleDrawerCreate} ref={btnRef}>
        <FaPlus />
        Create
      </Button>
    </ToolbarContainer>
  );
};
