import { Button, ToolbarContainer } from "@/components/base";
import { useCategoryContext } from "@/features/category";
import { FC, useRef } from "react";
import { FaPlus } from "react-icons/fa6";

export const Toolbar: FC = () => {
  const { toggleDrawerCreate } = useCategoryContext();

  return (
    <ToolbarContainer position="right">
      <Button variant="success" onClick={toggleDrawerCreate}>
        <FaPlus />
        Create
      </Button>
    </ToolbarContainer>
  );
};
