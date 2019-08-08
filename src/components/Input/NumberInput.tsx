import * as React from 'react';
import Input, { InputProps } from './input';

interface Iprops {
  readonly onChange?: (value: string) => void;
  readonly value?: string;
}
type Cprops = Iprops & InputProps;

const NumberInput = (props: Cprops) => {
  const { onChange } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!Number.isNaN(Number(value)) && reg.test(value)) || value === '') {
      if (onChange) {
        onChange(value);
      }
    }
  };
  return <Input {...props} onChange={handleChange} type='number' />;
};
export default NumberInput;
