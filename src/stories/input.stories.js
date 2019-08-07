import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Input from '../components/Input';

storiesOf('Components/Input', module).add(
  'all Input',
  withInfo(`
      标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
    `)(() => {
    return (
      <div>
        <h3>基本使用</h3>
        <Input />
        <h3>身份证</h3>
        <Input.IdCardInput />
        <h3>密码输入框</h3>
        <Input.Password />
      </div>
    );
  })
);
