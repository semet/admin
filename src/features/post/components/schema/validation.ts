import { z } from "zod";

export const schema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters long" }),
  categoryId: z
    .string()
    .uuid()
    .min(3, { message: "Category must be at least 3 characters long" }),
});

export type PostSchema = z.infer<typeof schema>;

export type PostUpdateSchema = PostSchema & { id: string };
