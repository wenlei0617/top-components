import * as React from 'react';
import radio from './radio';
import './styles/group.scss';
interface GroupProps {
  readonly defaultValue?: any;
  readonly name?: string;
  readonly children: React.ReactNode;
  readonly value?: any;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Group: React.SFC<GroupProps> = (props: GroupProps) => {
  const { children, value, onChange, defaultValue, name } = props;
  const [state, useState] = React.useState(() => {
    return {
      value: value || defaultValue,
    };
  });
  React.useEffect(() => {
    if (value in props && value !== state.value) {
      useState({
        value,
      });
    }
  }, [value]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    useState({
      value: event.target.value,
    });
    onChange && onChange(event);
  };
  const newProps =
    name === undefined
      ? {}
      : {
          name,
        };
  return (
    <div className='topC-radio-group'>
      {React.Children.map(children, (thisArg: radio) => {
        return React.cloneElement({
          ...thisArg,
          props: {
            ...thisArg.props,
            ...newProps,
            checked: state.value === thisArg.props.value,
            onChange: handleChange,
          },
        });
      })}
    </div>
  );
};
export default Group;
