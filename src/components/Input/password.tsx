import * as React from 'react';
import AffixInput, { AffixInputProps } from './affixInput';
import Icon from '../Icon';
const PassWord = (props: AffixInputProps) => {
  const [IconName, setIcon] = React.useState('ios-eye-off');
  const handleMouseOver = () => {
    setIcon(IconName === 'ios-eye' ? 'ios-eye-off' : 'ios-eye');
  };
  return (
    <AffixInput
      placeholder='请输入密码'
      type={IconName === 'ios-eye' ? 'text' : 'password'}
      suffix={
        <Icon
          style={{ cursor: 'pointer' }}
          type={IconName}
          onClick={handleMouseOver}
        />
      }
      {...props}
    />
  );
};
export default PassWord;
