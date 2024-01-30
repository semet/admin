import prisma from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  if (req.method !== "PUT") {
    throw new Error("Method not allowed");
  }
  if (!session) {
    res.status(403).json({ message: "Forbidden" });
  }
  const { id, status } = req.body;
  const category = await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      published: status,
    },
  });
  res.status(201).json({
    message: "Category status updated successfully",
    data: category,
  });
}
