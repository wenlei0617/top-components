import * as React from "react";
import Thead, { Iitems } from "./thead";

interface Iprops {
  columns: Iitems[];
  dataSource: object[];
  emptyText: React.ReactNode;
  pagination: object;
}
class Table extends React.Component<Iprops> {
  render() {
    const { columns } = this.props;
    return (
      <table>
        <Thead data={columns} />
      </table>
    );
  }
}
export default Table;
