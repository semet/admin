import prisma from "@/utils/db";
import { Category } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>,
) {
  const categories: Category[] = await prisma.category.findMany();

  return res.status(200).json(categories);
}
