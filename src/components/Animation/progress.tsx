import * as React from 'react';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';
import './styles/progress.scss';
interface Iprops {
  readonly children?: React.ReactNode;
  readonly strokeWidth: number;
  readonly height: number;
  readonly width: number;
  readonly rate: number;
  readonly backColor: string;
  readonly color: string;
  readonly className: string;
  readonly style: React.CSSProperties;
}
let circleLength: number;
const Progress = (props: Iprops) => {
  const {
    strokeWidth,
    height = 110,
    width = 110,
    rate,
    backColor,
    color,
    className,
    style,
    children,
    ...rest
  } = props;
  React.useEffect(() => {
    const ele: SVGCircleElement | null = document.querySelector(
      '.topC-progress-cover'
    );
    if (ele) {
      ele.setAttribute('transform-origin', `${width / 2}px  ${height / 2}px`);
    }
    circleLength = Math.floor(2 * Math.PI * (width / 2));
  }, []);
  React.useEffect(() => {
    rotateCircle(rate);
  }, [rate]);
  const rotateCircle = (val: number): void => {
    let receiveRate = Math.max(0, val);
    receiveRate = Math.min(100, val);
    const ele: SVGCircleElement | null = document.querySelector(
      '.topC-progress-cover'
    );
    if (ele) {
      ele.setAttribute(
        'stroke-dasharray',
        '' + (receiveRate * circleLength) / 100 + ',10000'
      );
    }
  };
  const reciveStyle = {
    width,
    height,
    ...style,
  };
  return (
    <div
      className={classnames({
        'topC-progress': true,
        [className]: !!className,
      })}
      style={reciveStyle}
      {...rest}
    >
      <svg
        xmlns='http://www.w3.org/200/svg'
        height={height}
        width={width}
        className='top-progress-svg'
      >
        <circle
          cy={height / 2}
          cx={width / 2}
          r={width / 2 - 5}
          fill='transparent'
          stroke={backColor}
          strokeWidth={strokeWidth}
        />
        <circle
          className='topC-progress-cover'
          cy={height / 2}
          cx={width / 2}
          r={width / 2 - 5}
          fill='transparent'
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray='0,10000'
        />
      </svg>
      <div className='top-progress-child'>{children}</div>
    </div>
  );
};
Progress.propTypes = {
  height: PropTypes.number,
  strokeWidth: PropTypes.number,
  rate: PropTypes.number,
  width: PropTypes.number,
  backColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};
Progress.defaultProps = {
  height: 120,
  strokeWidth: 2,
  width: 120,
  rate: 20,
  backColor: 'grey',
  color: 'red',
};
export default Progress;
