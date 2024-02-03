import { getCategoryRequest } from "@/features/category";
import { Category } from "@prisma/client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["category"],
    queryFn: () => getCategoryRequest(),
    placeholderData: keepPreviousData,
  });
};
