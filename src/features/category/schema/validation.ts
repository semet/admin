import { z } from "zod";

export const schema = z.object({
  name: z.string().min(3),
  imageUrl: z.string().url({ message: "Invalid URL" }),
});

export type CategorySchema = z.infer<typeof schema>;

export type CategoryUpdateSchema = CategorySchema & { id: string };
