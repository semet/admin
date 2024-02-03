import { OptionsOrGroups, GroupBase, Props as SelectProps } from "react-select";

export type TProps = SelectProps & {
  name: string;
  label?: string;
  id?: string;
  required?: boolean;
  options?: OptionsOrGroups<any, GroupBase<any>>;
};
