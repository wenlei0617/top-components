import * as classnames from "classnames";
import PropTypes from "prop-types";
import * as React from "react";
import "./styles/checkBox.scss";
interface Iprops {
  children: React.ReactNode;
  checked: boolean;
  onChange: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {};
}
const checkBox = (props: Iprops) => {
  const { children, checked, onChange } = props;
  const [state, setState] = React.useState({
    checked
  });
  const handleClick = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    setState({
      ...state,
      checked: !state.checked
    });
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <label className="topC-checkBox-wrapper" onClick={handleClick}>
      <span
        className={classnames({
          "topC-checkBox": true,
          "topC-checkBox-checked": state.checked
        })}>
        <input type="checkbox" />
        <span />
      </span>
      <span>{children}</span>
    </label>
  );
};
checkBox.propTypes = {
  checked: PropTypes.bool
};
checkBox.defaultProps = {
  checked: false
};
export default checkBox;
