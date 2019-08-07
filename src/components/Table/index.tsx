import * as React from 'react';
import Thead, { HeadItem, SORT_ORDER } from './thead';
import Tbody, { IbodyElmenet } from './tbody';
import './style/table.scss';
interface Iprops {
  columns: HeadItem[];
  dataSource: IbodyElmenet[];
  emptyText?: React.ReactNode;
  pagination?: object;
}
const Table = (props: Iprops) => {
  const { columns, dataSource } = props;
  const [data, changeData] = React.useState<IbodyElmenet[] | []>([]);

  React.useEffect(() => {
    changeData(dataSource);
  }, [dataSource]);

  const handleSorter = (sortOrder: SORT_ORDER, value: HeadItem) => {
    const copyData = [...data];
    const sortData = copyData.sort((pre: HeadItem, next: HeadItem) => {
      if (sortOrder === SORT_ORDER.ASCEND) {
        return pre[value.dataIndex] - next[value.dataIndex];
      }
      return next[value.dataIndex] - pre[value.dataIndex];
    });
    changeData(sortData);
  };
  return (
    <div className='topC-select'>
      <table cellPadding={0} cellSpacing={0}>
        <Thead data={columns} sorter={handleSorter} />
        <Tbody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
