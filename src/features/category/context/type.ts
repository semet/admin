import { Category } from "@prisma/client";

export type TCategoryContext = {
  isOpenDrawerCreate: boolean;
  toggleDrawerCreate: () => void;
  isOpenDrawerUpdate: boolean;
  toggleDrawerUpdate: () => void;
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
};
