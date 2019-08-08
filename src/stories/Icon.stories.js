import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Icon from '../components/Icon';

storiesOf('Components/Icon', module).add(
  'Icon',
  withInfo(`
     Icon图标
    `)(() => {
    return (
      <div>
        <h1>Icon图标</h1>
        <p>实现按需导入</p>
        <Icon type='ios-eye-off' />
      </div>
    );
  })
);
