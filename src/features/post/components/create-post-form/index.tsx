import { Button } from "@/components/base";
import React, { FC } from "react";
import { PostSchema, schema } from "@/features/post";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, TextEditor, Select } from "@/components/inputs";
import dynamic from "next/dynamic";
import { useGetCategories } from "@/features/category";

const Editor = dynamic(
  () => import("@/components/inputs/ckeditor").then((mod) => mod.TextEditor),
  {
    ssr: false,
  },
);
export const CreatePostForm: FC = () => {
  const formMethods = useForm<PostSchema>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = formMethods;

  const { data } = useGetCategories();

  const options = data?.map((c) => ({
    value: c.id,
    label: c.name,
  }));

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <TextField
          label="Title"
          name="title"
          type="text"
          required
          placeholder="Post Title"
        />

        <Select
          label="Category"
          name="categoryId"
          isClearable
          options={options}
        />

        <Editor initialValue="" name="content" />

        <div className="mt-4 flex items-center gap-2">
          <Button type="submit" variant="success">
            Save
          </Button>
          <Button variant="error" type="reset">
            Cancel
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
