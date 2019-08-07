import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Table from '../components/Table';
import Button from '../components/Button';
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'action',
    dataIndex: '',
    key: 'action',
    render: () => (
      <Button size='small' type='primary'>
        操作
      </Button>
    ),
  },
];
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '3',
    name: '胡彦斌',
    age: 10,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const sortColumns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    ordered: true,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'action',
    dataIndex: '',
    key: 'action',
    render: () => (
      <Button size='small' type='danger'>
        操作
      </Button>
    ),
  },
];
storiesOf('Components/Table', module).add(
  'Table',
  withInfo(`
      标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
    `)(() => {
    return (
      <div>
        <h3>自定义</h3>
        <Table columns={columns} dataSource={dataSource} />
        <h3>排序</h3>
        <Table columns={sortColumns} dataSource={dataSource} />
      </div>
    );
  })
);
