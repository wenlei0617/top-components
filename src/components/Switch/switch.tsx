import * as React from "react";
import * as PropsTypes from "prop-types";
import classnames from "classnames";
import "./switch.scss";
interface Iprops {
  checked?: boolean;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: "default" | "small";
  style?: React.CSSProperties;
  onChange?: (checked: boolean) => any;
  onClick?: (checked: boolean, event: React.MouseEvent) => any;
}

const Switch = (props: Iprops) => {
  const {
    checked,
    defaultChecked,
    checkedChildren,
    unCheckedChildren,
    onClick,
    onChange,
    style,
    size
  } = props;
  const newState = {
    checked: false
  };
  const [state, setState] = React.useState(newState);
  React.useEffect(() => {
    if ("checked" in props) {
      setState({
        checked: !!checked
      });
    } else {
      setState({
        checked: !!defaultChecked
      });
    }
  }, []);
  const handleClick: React.MouseEventHandler = e => {
    if (onClick) {
      onClick(!!checked, e);
    }
    if (onChange) {
      onChange(!!checked);
    }
    if (!("checked" in props)) {
      setState({
        ...state,
        checked: !state.checked
      });
    }
  };
  const className = classnames({
    "topC-switch": true,
    "topC-switch-checked": state.checked,
    "topC-switch-samll": size === "small"
  });
  return (
    <button style={style} onClick={handleClick} className={className}>
      <span className="topC-switch-inner">
        {state.checked ? checkedChildren : unCheckedChildren}
      </span>
    </button>
  );
};
Switch.propTypes = {
  checked: PropsTypes.bool,
  onClick: PropsTypes.func,
  defaultChecked: PropsTypes.bool,
  size: PropsTypes.oneOf(["small", "default"])
};
Switch.defaultProps = {
  defaultChecked: false
};
export default Switch;
