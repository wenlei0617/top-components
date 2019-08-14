import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../components/Button';
import Upload from '../components/Upload';
storiesOf('Components/Upload(文件上传)', module).add(
  'upload',
  withInfo(`
      标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
    `)(() => {
    const handleChange = info => {
      console.log(info);
    };
    return (
      <div>
        <Upload onChange={handleChange}>
          <Button>点击上传</Button>
        </Upload>
      </div>
    );
  })
);
