import { axiosInstance } from "@/apis";
import { CategoryUpdateSchema } from "@/features/category";

export const categoryUpdateRequest = async (params: CategoryUpdateSchema) => {
  try {
    const { data } = await axiosInstance.put("/category/update", params);
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
