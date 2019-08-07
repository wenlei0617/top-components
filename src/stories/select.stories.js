import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Select from '../components/select';

const options = [
  {
    value: 'test',
    label: 'test',
  },
  {
    value: 'test1',
    label: 'test1',
  },
  {
    value: 'test2',
    label: 'test2',
  },
  {
    value: 'test3',
    label: 'test3',
  },
];

storiesOf('Components/select', module).add(
  'all select',
  withInfo(`
      标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
    `)(() => {
    return (
      <div>
        <Select options={options} value='test1' />
      </div>
    );
  })
);
