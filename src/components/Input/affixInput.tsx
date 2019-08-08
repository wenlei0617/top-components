/**
 * author  topCoding
 * desc  input 组件前缀或者后缀
 */

import * as React from 'react';
import classnames from 'classnames';
// import PropTypes from 'prop-types';
import Input, { InputProps } from './input';
import './styles/Affix.scss';
export interface AffixInputProps extends InputProps {
  readonly prefix?: React.ReactNode; //输入框前缀
  readonly suffix?: React.ReactNode; // 输入框后缀
}

const AffixInput = (props: AffixInputProps) => {
  const { prefix, suffix, ...rest } = props;
  const classname = classnames('topC-input-affix-wrapper', {
    'topC-input-affix-prefix': !!prefix,
    'topC-input-affix-suffix': !!suffix,
  });
  return (
    <span className={classname}>
      {prefix && <span>{prefix}</span>}
      <Input {...rest} />
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
// AffixInput.propTypes = {
//   prefix: PropTypes.node,
// };
export default AffixInput;
