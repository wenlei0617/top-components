import * as React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import Icon from "../Icon";
import "./styles/search.scss";
import Input from "./input";
import Button from "../Button";
interface Iprops {
  readonly enterButton: string | boolean;
  readonly style: React.CSSProperties;
  readonly onSearch: () => void;
  readonly className: string;
}

const Search = (props: Iprops) => {
  const { enterButton, style, onSearch, className, ...rest } = props;
  const searchClassName = classnames({
    "topC-search": true,
    "topC-search-affix": enterButton === undefined,
    [className]: !!className
  });
  return (
    <span className={searchClassName} style={style}>
      <Input type="text" {...rest} />
      <span onClick={onSearch}>
        {enterButton === undefined && <Icon name="search" />}
        {enterButton === true && (
          <Button type="primary">
            <Icon name="search" />
          </Button>
        )}
        {typeof enterButton === "string" && <Button type="primary">{enterButton}</Button>}
      </span>
    </span>
  );
};
Search.propTypes = {
  enterButton: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  style: PropTypes.func,
  onSearch: PropTypes.func
};
Search.defaultProps = {
  onSearch: () => {}
};
export default Search;
