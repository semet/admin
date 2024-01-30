import { DataTable } from "@/components/base/data-table";
import { useGetCategories } from "@/features/category";
import { FC } from "react";
import { columns } from "./data";

export const CategoryTable: FC = () => {
  const { data } = useGetCategories();

  return <DataTable columns={columns} data={data} />;
};
