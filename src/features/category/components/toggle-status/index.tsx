import { ToggleSwitch } from "@/components/base";
import { toggleStatusRequest, useGetCategories } from "@/features/category";
import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { toast } from "react-toastify";
import { TProps } from "./types";

export const ToggleStatus: FC<TProps> = (props) => {
  const { id, published } = props;

  const { refetch } = useGetCategories();

  const { mutate } = useMutation({
    mutationFn: () =>
      toggleStatusRequest({
        id,
        status: !published,
      }),
    onSuccess: () => {
      toast.success("Category status updated successfully");
      refetch();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onToggle = () => {
    mutate();
  };
  return <ToggleSwitch onChange={() => onToggle()} enabled={published} />;
};
