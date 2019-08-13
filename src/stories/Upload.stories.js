import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../components/Button';
import message from '../components/Message';
storiesOf('Components/Upload(文件上传)', module).add(
  'upload',
  withInfo(`
      标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
    `)(() => {
    message.info('info测试');
    message.info('info测试');

    return (
      <div>
        <Button>Success</Button>
      </div>
    );
  })
);
