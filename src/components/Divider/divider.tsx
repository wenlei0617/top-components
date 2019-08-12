import * as React from 'react';
import classnames from 'classnames';
import './styles/divider.scss';
interface Iprops {
  readonly classNames?: string; // 分割线样式类
  readonly dashed?: boolean; // 是否虚线
  readonly style?: React.CSSProperties; // 分割线样式对象
  readonly children?: React.ReactChildren;
}
const Divider: React.SFC<Iprops> = (props: Iprops) => {
  const { dashed, children } = props;
  return (
    <div
      className={classnames('topC-divider', {
        'topC-divider-dashed': dashed,
        'topC-divider-with-text': !!children,
      })}
    >
      {children && <span className='topC-divider-inner-text'>{children}</span>}
    </div>
  );
};

Divider.defaultProps = {
  dashed: false,
};

export default Divider;
