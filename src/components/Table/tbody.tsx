import * as React from "react";
import { HeadItem } from "./thead";
import "./style/tbody.scss";
export interface IbodyElmenet {
  key: string | number;
  [propName: string]: any;
}
export interface ITbody {
  data: IbodyElmenet[];
  columns: HeadItem[];
}
const Tbody = (props: ITbody) => {
  const { data, columns } = props;
  return (
    <tbody className="topC-select-table-tbody">
      {data.map(item => {
        return (
          <tr key={item.key}>
            {columns.map(element => {
              if (!element.render) {
                return <td key={element.key}>{item[element.dataIndex]}</td>;
              }
              return <td key={element.key}> {element.render(item[element.dataIndex])}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
export default Tbody;
