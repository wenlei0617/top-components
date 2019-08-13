import * as React from 'react';
import Icon from '../Icon';

enum iconType {
  INFO = 'ios-information-circle',
  SUCCESS = '',
  ERROR = '',
}
interface Iprops {
  content: string;
}
const Notice: React.SFC<Iprops> = (props: Iprops) => {
  const { content } = props;
  return (
    <div className='topC-message'>
      <Icon type={iconType.INFO} />
      <span>{content}</span>
    </div>
  );
};
export default Notice;
