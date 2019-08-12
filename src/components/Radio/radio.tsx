import * as React from 'react';
import classnames from 'classnames';
import './styles/raido.scss';

interface RadioProps {
  readonly defaultChecked?: boolean;
  readonly children?: React.ReactNode;
  readonly checked?: boolean;
  readonly value?: any;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = (props: RadioProps) => {
  const { children, checked, value, onChange, defaultChecked, ...rest } = props;
  const wrapperClass = classnames('topC-radio-wrapper', {
    'topC-radio-wrapper-checked': checked,
  });
  const newProps =
    checked === undefined ? { defaultChecked } : { checked, onChange };
  return (
    <label className={wrapperClass}>
      <span className='topC-radio'>
        <input
          value={value}
          type='radio'
          className='topC-radio-input'
          readOnly
          {...newProps}
          {...rest}
        />
        <span className='topC-radio-inner' />
      </span>
      <span>{children}</span>
    </label>
  );
};

Radio.defaultProps = {
  checked: false,
  defaultChecked: false,
};
export default Radio;
