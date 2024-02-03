import React, { FC, useEffect, useId, useState } from "react";
import { TProps } from "./types";
import { get, useFormContext, Controller } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactSelect = dynamic(() => import("react-select"), {
  ssr: false,
});

export const Select: FC<TProps> = (props) => {
  const { name, id, label, required, options, ...rest } = props;
  const generatedId = useId();
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  const error = get(errors, name);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id ? id : generatedId} className={`text-gray-600`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Controller
        control={control}
        render={({ field }) => (
          <ReactSelect
            instanceId={id ? id : generatedId}
            {...field}
            {...rest}
            options={options}
            id={id ? id : generatedId}
            value={
              options ? options.find((c: any) => c.value === field.value) : null
            }
            onChange={(val: any) => field.onChange(val.value)}
            className="z-10 rounded-md !border-gray-300 text-gray-600"
          />
        )}
        name={name}
      />
      {error && (
        <span className="mp-1 -mt-2 text-sm tracking-wide text-red-400">
          {error.message.toString()}
        </span>
      )}
    </div>
  );
};
