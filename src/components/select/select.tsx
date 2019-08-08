import * as React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

import './styles/select.scss';

interface OptionProps {
  value: string;
  label: string;
  disabled?: boolean;
}
interface Iprops {
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  options: OptionProps[];
  placeholder?: string;
  value?: string;
  onChange?: (value: OptionProps) => void;
  label?: React.ReactNode;
}
interface MouseProps {
  current: HTMLDivElement | null;
}

const Select = (props: Iprops) => {
  const [ishidden, changeVisible] = React.useState(true);
  const selectInput: MouseProps = React.useRef(null);
  const selectScroll: MouseProps = React.useRef(null);

  const { style, options, placeholder, value, onChange, label } = props;

  const handleChange = (item: OptionProps) => {
    console.log('change');
    if (onChange) {
      onChange(item);
    }
  };
  // 点击其他区域关闭
  React.useEffect(() => {
    // 点击空白处关闭
    function bindChangeVisible() {
      changeVisible(true);
    }
    document.body.addEventListener('click', bindChangeVisible);

    // 点击输入框弹开
    function switchVisible(event: MouseEvent) {
      event.stopPropagation();
      changeVisible(!ishidden);
    }
    if (selectInput.current) {
      selectInput.current.addEventListener('click', switchVisible, false);
    }
    return () => {
      document.body.removeEventListener('click', bindChangeVisible);
    };
  }, []);
  return (
    <div className='topC-select' style={style}>
      {label && <span>{label}</span>}
      <div
        className={classnames({
          'topC-select-rightBox': true,
          'topC-select-rightBox-nolabel': !label,
        })}
      >
        <div className='topC-select-selection' ref={selectInput}>
          <span>
            <input
              type='text'
              readOnly
              placeholder={placeholder}
              value={value}
            />
          </span>
          <Icon type={ishidden ? 'down' : 'up'} />
        </div>
        <div
          ref={selectScroll}
          className={classnames({
            'topC-select-option': true,
            'topC-select-option-hidden': ishidden,
          })}
        >
          <ul>
            {options.map(item => (
              <li
                className={classnames({
                  'topC-select-options-disabled': item.disabled,
                })}
                key={item.label}
                data-checked={value === item.label}
                onClick={() => {
                  if (!item.disabled) {
                    handleChange(item);
                  }
                }}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
// Select.propTypes = {
//   options: PropTypes.array.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
//   label: PropTypes.node,
// };
Select.defaultProps = {
  options: [],
};
export default Select;
