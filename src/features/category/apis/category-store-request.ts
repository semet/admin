import { axiosInstance } from "@/apis";
import { CategorySchema } from "@/features/category";

export const categoryStoreRequest = async (params: CategorySchema) => {
  try {
    const { data } = await axiosInstance.post("/category/store", params);
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
