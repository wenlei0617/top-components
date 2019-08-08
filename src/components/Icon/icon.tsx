import * as React from 'react';
import * as Proptypes from 'prop-types';
import Archer from 'archer-svgs';
import './icon.scss';

interface Iprops {
  readonly type: string;
  readonly fill?: string;
  readonly spin?: boolean;
  readonly style?: React.CSSProperties;
  [props: string]: any;
}

const archer = new Archer();
const svgSourece = 'https://unpkg.com/ionicons@4.4.2/dist/ionicons/svg/';

const getSvg = async (type: string) => {
  return await archer.fetchSvg(`${svgSourece}${type}.svg`);
};

const Icon = (props: Iprops) => {
  const { type, fill, style, component, spin, ...rest } = props;
  const [svgHtml, changeSvgHtml] = React.useState('');
  React.useEffect(() => {
    getSvg(type).then(response => {
      changeSvgHtml(response);
    });
  }, [type]);
  return (
    <i
      className='topC-icon'
      style={style}
      dangerouslySetInnerHTML={{ __html: component || svgHtml }}
      {...rest}
    />
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
