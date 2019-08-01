import * as React from "react";
import Input, { Iprops as InputProps } from "./input";

interface Iprops extends InputProps {
  placeholder: string;
}
const IdCardInput: React.FC<Iprops> = (props: Iprops) => {
  const { placeholder = "请输入身份证号码", value, onChange } = props;
  const [IdCard, setIdCard] = React.useState("");
  React.useEffect(() => {
    setIdCard(value || "");
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue: string = event.target.value.replace(/[^\d\x\X]/g, "");
    if (value !== filterValue) {
      setIdCard(filterValue);
      if (typeof onChange === "function") {
        onChange(event);
      }
    }
  };
  return (
    <Input
      {...props}
      value={IdCard}
      placeholder={placeholder}
      onChange={handleChange}
      maxLength={17}
    />
  );
};
export default IdCardInput;
