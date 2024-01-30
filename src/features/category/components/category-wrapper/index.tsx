import { Card } from "@/components/base";
import {
  CategoryProvider,
  CategoryTable,
  CreateCategory,
  Toolbar,
  UpdateCategory,
} from "@/features/category";
import { FC } from "react";

export const CategoryWrapper: FC = () => {
  return (
    <CategoryProvider>
      <div className="mx-auto w-full">
        {/* toolbar */}
        <Toolbar />
        <Card title="Categories">
          {/* table */}
          <CategoryTable />
        </Card>
      </div>
      <CreateCategory />
      <UpdateCategory />
    </CategoryProvider>
  );
};
