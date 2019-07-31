import * as React from "react";
import PropTypes from "prop-types";
import "./style/thead.scss";
export interface Iitems {
  title: string;
  key: string;
  dataIndex: string;
  render?: (text: string) => React.ReactNode;
}
interface Iprops {
  data: Iitems[];
}
class Thead extends React.Component<Iprops> {
  static defaultProps = {
    data: []
  };
  static propTypes = {
    data: PropTypes.array
  };
  render() {
    const { data } = this.props;
    return (
      <thead className="topC-tabel-head">
        <tr>
          {data.map((item: Iitems) => (
            <th key={item.key}>
              <span>{item.render ? item.render(item.title) : <div>{item.title}</div>}</span>
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
export default Thead;
