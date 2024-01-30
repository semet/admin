import { ColumnDef } from "@tanstack/react-table";

export type TProps<T> = {
  columns: ColumnDef<T, any>[];
  data: T[];
};
