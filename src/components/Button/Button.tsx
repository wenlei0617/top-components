import classnames from 'classnames';
import * as React from 'react';
import Icon from '../Icon';
import './styles/button.scss';

interface Iprops {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  type?: 'primary' | 'danger';
  loading?: boolean;
  size?: 'small' | 'large';
  onClick?: React.MouseEventHandler;

  htmlType?: 'button' | 'submit' | 'reset';
}
const Button = (props: Iprops) => {
  const {
    children,
    htmlType,
    style,
    className,
    type,
    onClick,
    loading,
    size,
    ...rest
  } = props;
  const classes = classnames({
    ['top-button']: true,
    [`${className}`]: !!className,
    [`top-button-${type}`]: !!type,
    [`top-button-loading`]: loading,
    [`top-button-${size}`]: !!size,
  });
  const iconNode = loading ? <Icon type='loading' spin={true} /> : null;
  return (
    <button
      type={htmlType}
      style={style}
      onClick={onClick}
      className={classes}
      {...rest}
    >
      {iconNode}
      {children}
    </button>
  );
};

Button.defaultProps = {
  htmlType: 'button',
  loading: false,
};
export default Button;
