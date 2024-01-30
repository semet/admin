import { Button, Drawer } from "@/components/base";
import { TextField } from "@/components/inputs";
import {
  CategorySchema,
  CategoryUpdateSchema,
  categoryUpdateRequest,
  schema,
  useCategoryContext,
  useGetCategories,
} from "@/features/category";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const UpdateCategory: FC = () => {
  const { isOpenDrawerUpdate, toggleDrawerUpdate, selectedCategory } =
    useCategoryContext();

  const formMethods = useForm<CategorySchema>({
    resolver: zodResolver(schema),
  });
  const { handleSubmit, setValue, watch } = formMethods;
  const watchUrl = watch("imageUrl");
  const toggleDrawer = () => {
    toggleDrawerUpdate();
    formMethods.reset();
  };

  const { refetch } = useGetCategories();

  const { mutate } = useMutation({
    mutationFn: (data: CategoryUpdateSchema) => categoryUpdateRequest(data),
    onSuccess: () => {
      toggleDrawer();
      toast.success("Category updated successfully");
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
    mutate({ ...data, id: selectedCategory?.id as string });
  });

  useEffect(() => {
    if (selectedCategory) {
      setValue("name", selectedCategory.name);
      setValue("imageUrl", selectedCategory.imageUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);
  return (
    <Drawer
      isOpen={isOpenDrawerUpdate}
      onOpen={toggleDrawerUpdate}
      onClose={toggleDrawerUpdate}
      title="Update category"
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
          {selectedCategory || watchUrl ? (
            <Image
              src={watchUrl ? watchUrl : (selectedCategory?.imageUrl as string)}
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
