import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TProps } from "./types";

export const DataTable = <T,>(props: TProps<T>) => {
  const { columns, data } = props;
  const table = useReactTable({
    columns,
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="w-full text-balance text-left text-gray-500 dark:text-gray-400">
      <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} scope="col" className="px-6 py-3">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="text-gray-800">
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="border-b bg-white odd:bg-slate-100 hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-800"
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-6 py-4">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
