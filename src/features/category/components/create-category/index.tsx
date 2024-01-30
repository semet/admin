import { Button, Drawer } from "@/components/base";
import { TextField } from "@/components/inputs";
import {
  CategorySchema,
  categoryStoreRequest,
  schema,
  useCategoryContext,
  useGetCategories,
} from "@/features/category";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const CreateCategory: FC = () => {
  const { isOpenDrawerCreate, toggleDrawerCreate } = useCategoryContext();
  const formMethods = useForm<CategorySchema>({
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = formMethods;
  const watchUrl = watch("imageUrl");
  const toggleDrawer = () => {
    toggleDrawerCreate();
    formMethods.reset();
  };

  const { refetch } = useGetCategories();

  const { mutate } = useMutation({
    mutationFn: (params: CategorySchema) => categoryStoreRequest(params),
    onSuccess: () => {
      toggleDrawer();
      toast.success("Category created successfully");
      refetch();
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message);
      } else {
        toast.error(err.message);
      }
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });
  return (
    <Drawer
      isOpen={isOpenDrawerCreate}
      onOpen={toggleDrawer}
      onClose={toggleDrawer}
      title="Create category"
      position="right"
    >
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
          <TextField
            label="Category Name"
            name="name"
            type="text"
            required
            placeholder="Category Name"
          />

          <TextField
            label="Image URL"
            name="imageUrl"
            type="text"
            required
            placeholder="image URL"
          />
          {watchUrl ? (
            <Image
              src={watchUrl}
              alt="placeholder"
              width={100}
              height={100}
              className="rounded-md p-2 shadow-md"
            ></Image>
          ) : null}

          <div className="mt-4 flex items-center gap-2">
            <Button type="submit" variant="success">
              Save
            </Button>
            <Button variant="error" type="reset" onClick={toggleDrawer}>
              Cancel
            </Button>
          </div>
        </form>
      </FormProvider>
    </Drawer>
  );
};
