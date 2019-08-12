import * as React from 'react';
import * as Proptypes from 'prop-types';
import classnames from 'classnames';

import './styles/input.scss';

export interface InputProps {
  readonly defaultValue?: string;
  readonly disabled?: boolean;
  readonly placeholder?: string;
  readonly size?: 'small' | 'large' | 'default';
  readonly value?: string;
  readonly type?: string;
  readonly style?: React.CSSProperties;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [index: string]: any;
}

const Input: React.SFC<InputProps> = (props: InputProps) => {
  const {
    disabled,
    type,
    size,
    style,
    placeholder,
    value,
    onChange,
    defaultValue,
    ...rest
  } = props;
  const className = classnames({
    'topC-input': true,
    [`topC-input-${size}`]: !!size,
  });
  const newProps = value === undefined ? { defaultValue } : { value, onChange };
  return (
    <input
      style={style}
      className={className}
      placeholder={placeholder}
      type={type}
      data-size={size}
      disabled={disabled}
      {...newProps}
      {...rest}
    />
  );
};
Input.propTypes = {
  defaultValue: Proptypes.string,
  disabled: Proptypes.bool,
  id: Proptypes.string,
  size: Proptypes.oneOf(['small', 'large', 'default']),
  value: Proptypes.string,
  type: Proptypes.string,
  onChange: Proptypes.func,
  style: Proptypes.object,
  placeholder: Proptypes.string,
};
Input.defaultProps = {
  defaultValue: '',
  disabled: false,
  size: 'default',
  type: 'text',
  placeholder: '',
};

export default Input;
