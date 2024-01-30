import { getCategoryRequest } from "@/features/category";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoryRequest(),
    placeholderData: keepPreviousData,
  });
};
