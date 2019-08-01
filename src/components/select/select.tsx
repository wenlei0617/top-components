import * as React from "react";
import Icon from "../Icon";
import Option, { IOptionProps } from "./option";

import "./styles/select.scss";

interface Iprops {
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface ISelect {
  (props: Iprops): JSX.Element;
  option: (props: IOptionProps) => JSX.Element;
}
const Select: ISelect = (props: Iprops) => {
  const [iconName, changeIconName] = React.useState("down");
  const { style, children } = props;
  const handleClick = () => {
    const name = iconName === "down" ? "up" : "down";
    changeIconName(name);
  };
  return (
    <div className="topC-select" style={style}>
      <div className="topC-select-selection" onClick={handleClick}>
        <span>1231</span>
        <Icon name={iconName} />
      </div>
      <div className="topC-select-option">{children}</div>
    </div>
  );
};

Select.option = Option;
export default Select;
