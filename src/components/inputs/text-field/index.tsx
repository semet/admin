import { FC, useId } from "react";
import { get, useFormContext } from "react-hook-form";
import { TextFieldProps } from "./type";

export const TextField: FC<TextFieldProps> = (props) => {
  const { type, name, id, label, required, ...rest } = props;
  const generatedId = useId();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id ? id : generatedId} className={`text-gray-600`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        {...register(name)}
        {...rest}
        className={`rounded-md text-gray-600 ${error ? "border-red-400 ring-red-400 focus:border-red-400 focus:ring-red-400" : "!border-gray-300"}`}
      />
      {error && (
        <span className="mp-1 -mt-2 text-sm tracking-wide text-red-400">
          {error.message.toString()}
        </span>
      )}
    </div>
  );
};
