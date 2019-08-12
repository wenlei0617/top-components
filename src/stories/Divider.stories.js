import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Divider from '../components/Divider';

storiesOf('Components/Divider', module).add(
  'all Divider',
  withInfo(`
      标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
    `)(() => {
    return (
      <div>
        <h3>实线</h3>
        <Divider />
        <h3>虚线</h3>
        <Divider dashed />
        <h3>Text</h3>
        <Divider dashed>Text</Divider>
      </div>
    );
  })
);
