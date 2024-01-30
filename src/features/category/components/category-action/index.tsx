import { Button } from "@/components/base";
import { useCategoryContext } from "@/features/category";
import { Category } from "@prisma/client";
import { FC } from "react";
import { FaEdit } from "react-icons/fa";

export const CategoryAction: FC<{ category: Category }> = (props) => {
  const { category } = props;
  const { toggleDrawerUpdate, setSelectedCategory } = useCategoryContext();
  const onToggle = () => {
    toggleDrawerUpdate();
    setSelectedCategory(category);
  };
  return (
    <>
      <Button variant="primary" onClick={onToggle}>
        <FaEdit />
      </Button>
    </>
  );
};
