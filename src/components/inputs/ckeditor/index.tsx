import React, { FC, useEffect, useRef } from "react";
import type { Editor as EditorRef } from "tinymce";
import { Editor } from "@tinymce/tinymce-react";
import { TProps } from "./type";
import { get, useFormContext } from "react-hook-form";

export const TextEditor: FC<TProps> = (props) => {
  const { initialValue, name } = props;

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);

  const editorRef = useRef<EditorRef | null>(null);

  return (
    <Editor
      apiKey="1fdtri2ym598kn2gz24eoodud6rx7emjm7a8vlw5m0ailnet"
      textareaName={name}
      {...register(name)}
      onInit={(evt, editor) => (editorRef.current = editor)}
      onChange={(e) => {
        setValue(name, e.target.getContent());
      }}
      initialValue={initialValue}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
};
