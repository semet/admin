import { CategoryAction, ToggleStatus } from "@/features/category";
import { Category } from "@prisma/client";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";

export const columnHelper = createColumnHelper<Category>();

export const columns = [
  columnHelper.display({
    id: "name",
    header: "name",
    cell: (info) => <div>{info.row.original.name}</div>,
  }),
  columnHelper.display({
    id: "slug",
    header: "Slug",
    cell: (info) => <div>{info.row.original.slug}</div>,
  }),
  columnHelper.display({
    id: "imageUrl",
    header: "Image",
    cell: (info) => (
      <Image
        src={info.row.original.imageUrl}
        alt="placeholder"
        width={100}
        height={100}
        className="rounded-md p-2 shadow-md"
      ></Image>
    ),
  }),
  columnHelper.display({
    id: "togglePublish",
    header: () => <span>Published</span>,
    cell: (info) => (
      <ToggleStatus
        id={info.row.original.id}
        published={info.row.original.published}
      />
    ),
  }),
  columnHelper.display({
    id: "actions",
    header: () => <span>Actions</span>,
    cell: (info) => <CategoryAction category={info.row.original} />,
  }),
];
