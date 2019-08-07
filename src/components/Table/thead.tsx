import * as React from 'react';
// import PropTypes from 'prop-types';
import './style/thead.scss';
import Icon from '../Icon';
export enum SORT_ORDER {
  ASCEND = 'ascend', // 升序
  DESCEND = 'descend', // 降序
}

export interface HeadItem {
  title: string;
  key: string;
  dataIndex: string;
  style?: React.CSSProperties;
  ordered?: boolean; // 是否开启排序
  sortOrder?: SORT_ORDER; // 排序规则
  sorter?: () => void; // 排序方法
  render?: (text: string) => React.ReactNode;
}
interface Iprops {
  data: HeadItem[];
  sorter?: (sortOrder: SORT_ORDER, value: HeadItem) => void; // 触发父级的排序方法
}

const Thead = (props: Iprops) => {
  const { data, sorter } = props;
  const handleClick = (sortOrder: SORT_ORDER, value: HeadItem) => {
    if (sorter) {
      sorter(sortOrder, value);
    }
  };
  return (
    <thead className='topC-tabel-head'>
      <tr>
        {data.map((item: HeadItem) => (
          <th key={item.key} style={item.style}>
            <div>
              {item.title}
              {item.ordered && (
                <span className='topC-table-column-sorter'>
                  <Icon
                    name='sort_up'
                    fill='yellow'
                    onClick={() => handleClick(SORT_ORDER.ASCEND, item)}
                  />
                  <Icon
                    name='sort_down'
                    onClick={() => handleClick(SORT_ORDER.DESCEND, item)}
                  />
                </span>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};
Thead.defaultProps = {
  data: [],
};
// Thead.propTypes = {
//   data: PropTypes.array
// };

export default Thead;
