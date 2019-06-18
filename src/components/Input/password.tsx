import * as React from "react";
import Input from "./input";
import Icon from "../Icon";
import "./styles/password.scss";
const PassWord = () => {
  const [IconName, setIcon] = React.useState("view_off");
  const handleMouseOver = () => {
    setIcon(IconName === "view" ? "view_off" : "view");
  };
  return (
    <span className="topC-password">
      <Input type={IconName === "view" ? "text" : "password"} />
      <span onClick={handleMouseOver}>
        <Icon name={IconName} />
      </span>
    </span>
  );
};
export default PassWord;
