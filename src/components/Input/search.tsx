import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import './styles/search.scss';
import Input from './input';
import AffixInput from './affixInput';
import Button from '../Button';
interface Iprops {
  readonly enterButton: string | boolean;
  readonly style: React.CSSProperties;
  readonly onSearch: () => void;
  readonly className: string;
}

const Search = (props: Iprops) => {
  const { enterButton, style, onSearch, className, ...rest } = props;
  const searchClassName = classnames({
    'topC-input-search': true,
    [className]: !!className,
  });
  if (enterButton === undefined) {
    return <AffixInput suffix={<Icon type='md-search' />} />;
  }

  return (
    <span className={searchClassName} style={style}>
      <Input type='text' {...rest} />
      <Button type='primary' className='topC-input-search-btn'>
        {enterButton === true ? <Icon type='md-search' /> : enterButton}
      </Button>
    </span>
  );
};
Search.propTypes = {
  enterButton: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  style: PropTypes.func,
  onSearch: PropTypes.func,
};
Search.defaultProps = {
  onSearch: () => {},
};
export default Search;
