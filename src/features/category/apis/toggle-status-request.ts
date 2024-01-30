import { axiosInstance } from "@/apis";

export const toggleStatusRequest = async ({
  id,
  status,
}: {
  id: string;
  status: boolean;
}) => {
  try {
    const data = await axiosInstance.put("/category/toggle-status", {
      id,
      status,
    });
    return data.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
