import classnames from "classnames";
import PropTypes from "prop-types";
import * as React from "react";
import Icon from "../Icon";
import "./styles/button.scss";
export type buttonType = "primary" | "danger";

interface Iprops {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  type?: buttonType;
  loading?: boolean;
  size?: "small" | "large";
  onClick?: React.MouseEventHandler;
  htmlType?: "button" | "submit" | "reset";
}
const Button = (props: Iprops) => {
  const { children, htmlType, style, className, type, onClick, loading, size, ...rest } = props;
  const classes = classnames({
    ["top-button"]: true,
    [`${className}`]: !!className,
    [`top-button-${type}`]: !!type,
    [`top-button-loading`]: loading,
    [`top-button-${size}`]: !!size
  });
  const defaultText = type || "default";
  const iconNode = loading ? <Icon name="loading" spin={true} /> : null;
  return (
    <button type={htmlType} style={style} onClick={onClick} className={classes} {...rest}>
      {iconNode}
      <span>{children || defaultText}</span>
    </button>
  );
};
Button.defaultProps = {
  htmlType: "button",
  loading: false
};
Button.prototype = {
  size: PropTypes.oneOf(["small", "large"])
};
export default Button;
