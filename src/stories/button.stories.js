import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../components/Button';

storiesOf('Components/Button', module).add(
  'all button',
  withInfo(`
      标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
    `)(() => {
    return (
      <div>
        <Button>测试按钮</Button>
        <Button type='danger'>测试按钮</Button>
        <Button type='primary'>测试按钮</Button>
      </div>
    );
  })
);
