import * as React from "react";
import PropTypes from "prop-types";
import "./styles/progress.scss";
interface Iprops {
  readonly children?: React.ReactNode;
  readonly strokeWidth?: number;
  readonly height?: number;
  readonly width?: number;
}
const Progress = (props: Iprops) => {
  const { strokeWidth, height = 110, width = 110 } = props;
  return (
    <svg height={height} width={width}>
      <circle
        cy={height / 2}
        r={height / 2}
        cx={width / 2}
        fill="none"
        stroke="grey"
        stroke-width={strokeWidth}
      />
      <circle
        cx={55}
        cy={55}
        r={50}
        fill="none"
        stroke="red"
        stroke-width={strokeWidth}
        stroke-dasharray="0,10000"
      />
    </svg>
  );
};
Progress.propTypes = {
  height: PropTypes.number,
  strokeWidth: PropTypes.number,
  width: PropTypes.number
};
Progress.defaultProps = {
  height: 110,
  width: 110
};
export default Progress;
