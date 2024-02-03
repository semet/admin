import { Button } from "@/components/base";
import React, { FC } from "react";
import { PostSchema, schema } from "@/features/post";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextArea, TextField } from "@/components/inputs";

export const CreatePostForm: FC = () => {
  const formMethods = useForm<PostSchema>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = formMethods;

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

        <TextArea
          label="Title"
          name="title"
          required
          placeholder="Post Title"
        />

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
