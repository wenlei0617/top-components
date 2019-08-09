import * as React from 'react';
import radio from './radio';
import './styles/group.scss';
interface GroupProps {
  readonly children: React.ReactNode;
  readonly value?: any;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Group: React.SFC<GroupProps> = (props: GroupProps) => {
  const { children, value, onChange } = props;
  const handleChange = (Event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(Event);
    }
  };
  return (
    <div className='topC-radio-group'>
      {React.Children.map(children, (thisArg: radio) => {
        return React.cloneElement({
          ...thisArg,
          props: {
            ...thisArg.props,
            checked: value === thisArg.props.value,
            onChange: handleChange,
          },
        });
      })}
    </div>
  );
};
export default Group;
