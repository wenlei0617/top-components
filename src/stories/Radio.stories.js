import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Radio, { Group } from '../components/Radio';

const handleChange = () => {};

storiesOf('Components/Radio', module).add(
  'Radio',
  withInfo(`
     单选框。
    `)(() => {
    return (
      <div>
        <h3>基本使用</h3>
        <Radio value='Radio'>Radio</Radio>
        <h3>单选框</h3>
        <Group defaultValue={'B'} name='testRadio'>
          <Radio value='A'>A</Radio>
          <Radio value='B'>B</Radio>
          <Radio value='C'>C</Radio>
          <Radio value='D'>C</Radio>
        </Group>
      </div>
    );
  })
);
