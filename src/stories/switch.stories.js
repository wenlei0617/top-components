import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Switch from '../components/Switch';
import Icon from '../components/Icon';
storiesOf('Components/Switch', module).add(
  'all switch',
  withInfo(`
      开关选择器。
    `)(() => {
    return (
      <div>
        <h3>基本使用</h3>
        <Switch />
        <h3>不可用</h3>
        <Switch disabled checked />
        <h3>文字和图标</h3>
        <Switch checkedChildren='开' unCheckedChildren='关' />
        <Switch
          checkedChildren='0'
          unCheckedChildren='1'
          style={{ marginLeft: 20, marginRight: 20 }}
        />
        <Switch
          checkedChildren={<Icon type='md-checkmark' />}
          unCheckedChildren={<Icon type='md-close' />}
        />
      </div>
    );
  })
);
