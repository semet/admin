import { axiosInstance } from "@/apis";

export const getCategoryRequest = async () => {
  try {
    const data = await axiosInstance.get("/category");
    return data.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
