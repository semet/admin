export type TextFieldProps = Required<
  Pick<React.InputHTMLAttributes<HTMLInputElement>, "name" | "type">
> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "type"> & {
    label?: string;
  };
