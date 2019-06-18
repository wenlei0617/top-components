import * as React from "react";
import PropTypes from "prop-types";
import "./styles/button.scss";
import classnames from "classnames";
import Icon from "../Icon";
interface Iprops {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  type?: "primary" | "danger";
  loading?: boolean;
  size?: "small" | "large";
  onClick?: React.MouseEventHandler;
  htmlType?: "button" | "submit" | "reset";
}
const Button = (props: Iprops) => {
  let { children, htmlType, style, className, type, onClick, loading, size, ...rest } = props;
  const classes = classnames({
    ["top-button"]: true,
    [`${className}`]: !!className,
    [`top-button-${type}`]: !!type,
    [`top-button-loading`]: loading,
    [`top-button-${size}`]: !!size
  });
  const defaultText = type || "default";
  const iconNode = loading ? <Icon name="loading" spin /> : null;
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
