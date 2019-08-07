import * as React from 'react';
import * as Proptypes from 'prop-types';
import './icon.scss';

interface Iprops {
  readonly name: string;
  readonly fill?: string;
  readonly spin?: boolean;
  readonly style?: React.CSSProperties;
  [props: string]: any;
}

const loadSvg = (name: string) => {
  const info = require(`./svg/${name}.svg`);
  return info;
};

const Icon = (props: Iprops) => {
  const { name, fill, spin, ...rest } = props;
  const IconInfo = loadSvg(name);
  return (
    <i {...rest} className='topC-icon'>
      <svg>
        <use xlinkHref={IconInfo} fill={fill} data-spin={spin} />
      </svg>
    </i>
  );
};

Icon.displayName = 'Icon';
Icon.prototype = {
  name: Proptypes.string,
  style: Proptypes.object,
  spin: Proptypes.bool,
};
Icon.defaultProps = {
  fill: '#fff',
  spin: false,
};
export default Icon;
