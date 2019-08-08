import * as React from 'react';
import * as Proptypes from 'prop-types';
import classnames from 'classnames';

import './styles/input.scss';
import Search from './search';
import Password from './password';
import IdCardInput from './IdCardInput';
import AffixInput from './affixInput';
import NumberInput from './NumberInput';

export interface InputProps {
  readonly defaultValue?: string;
  readonly disabled?: boolean;
  readonly id?: string;
  readonly placeholder?: string;
  readonly size?: 'small' | 'large' | 'default';
  readonly value?: string;
  readonly type?: string;
  readonly style?: React.CSSProperties;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [prop: string]: any;
}

class Input extends React.Component<InputProps> {
  public static Search: typeof Search;
  public static Password: typeof Password;
  public static IdCardInput: typeof IdCardInput;
  public static AffixInput: typeof AffixInput;
  public static NumberInput: typeof NumberInput;

  public static propTypes = {
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
  public static defaultProps = {
    defaultValue: '',
    disabled: false,
    size: 'default',
    type: 'text',
    placeholder: '',
  };

  public render() {
    const {
      disabled,
      id,
      type,
      size,
      style,
      placeholder,
      value,
      onChange,
      defaultValue,
      ...rest
    } = this.props;
    const className = classnames({
      'topC-input': true,
      [`topC-input-${size}`]: !!size,
    });
    const meProps = defaultValue
      ? {
          defaultValue: defaultValue,
        }
      : {
          onChange: onChange,
          value: value,
        };
    return (
      <input
        style={style}
        className={className}
        id={id}
        placeholder={placeholder}
        type={type}
        data-size={size}
        disabled={disabled}
        {...meProps}
        {...rest}
      />
    );
  }
}
export default Input;
