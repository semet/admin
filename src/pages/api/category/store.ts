import { generateSlug } from "@/utils";
import prisma from "@/utils/db";
import { Category } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);
  if (req.method !== "POST") {
    throw new Error("Method not allowed");
  }
  if (!session) {
    res.status(403).json({ message: "Forbidden" });
  }
  const { name, imageUrl } = req.body;
  const category = await prisma.category.create({
    data: {
      slug: generateSlug(name),
      name,
      imageUrl,
    } as Category,
  });
  res.status(201).json({
    message: "Category created successfully",
    data: category,
  });
}
