import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Input from '../components/Input';
import Icon from '../components/Icon';

const { AffixInput, NumberInput } = Input;
storiesOf('Components/Input', module).add(
  'all Input',
  withInfo(`
      通过鼠标或键盘输入内容，是最基础的表单域的包装。
    `)(() => {
    const { Search } = Input;
    return (
      <div>
        <h3>基本使用</h3>
        <Input placeholder='Basic usage' />
        <h3>前缀和后缀</h3>
        <AffixInput
          prefix={<Icon type='md-person' />}
          suffix={<Icon type='md-information-circle' />}
          placeholder='input search text'
        />
        <h3>身份证</h3>
        <Input.IdCardInput />
        <h3>密码输入框</h3>
        <Input.Password />
        <h3>搜索框</h3>
        <Search enterButton />
        <p>自定义图标</p>
        <Search enterButton='搜索' />
        <h3>数字框</h3>
        <NumberInput value={'123'} />
      </div>
    );
  })
);
