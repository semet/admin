import { Category } from "@prisma/client";
import { FC, ReactNode, createContext, useContext, useState } from "react";
import { TCategoryContext } from "./type";

const CategoryContext = createContext<TCategoryContext | null>(null);

const CategoryProvider: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  const [isOpenDrawerCreate, setIsOpenDrawerCreate] = useState(false);
  const [isOpenDrawerUpdate, setIsOpenDrawerUpdate] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const toggleDrawerCreate = () => {
    setIsOpenDrawerCreate(!isOpenDrawerCreate);
  };

  const toggleDrawerUpdate = () => {
    setIsOpenDrawerUpdate(!isOpenDrawerUpdate);
  };

  const values = {
    isOpenDrawerCreate,
    toggleDrawerCreate,
    isOpenDrawerUpdate,
    toggleDrawerUpdate,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (context === null) {
    throw new Error("useCategoryContext must be used within CategoryProvider");
  }
  return context;
};

export { CategoryProvider, useCategoryContext };
