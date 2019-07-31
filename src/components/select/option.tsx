import * as React from "react";
export interface IOptionProps {
  value?: string;
  children?: React.ReactNode;
}
const Option = (props: IOptionProps) => {
  const { value, children } = props;
  return <li data-value={value}>{children}</li>;
};
export default Option;
