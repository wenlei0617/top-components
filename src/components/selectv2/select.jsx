import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/select.scss';

let instance;

// hooks作用，创建/销毁容器
const useAlign = (targetRef) => {
    const [visible, setVisible] = useState(false);

    if (!instance) {
        instance = document.createElement('div');
        instance.className = 'select';
    }

    function setInstanceStyle({ top, left }) {
        instance.style.top = top;
        instance.style.left = left;
    }

    useEffect(() => {
        const container = document.body;
        if (visible) {
            const { top, left, height } = targetRef.current.getBoundingClientRect();
            setInstanceStyle({
                top: `${document.documentElement.scrollTop + top + height + 10}px`,
                left: `${document.documentElement.scrollLeft + left}px`
            })
            container.appendChild(instance);
        } else {
            try {
                container.removeChild(instance);                
            } catch (error) {
                
            }
        }
    }, [visible]);

    return {
        visible,
        setVisible,
        instance,
    }
}

export const Select = (props) => {
    const { containerId, className, onChange } = props;
    const [ value, setValue ] = useState(props.defaultValue);
    const [ label, setLabel ] = useState('');
    const inputRef = useRef(null);
    let canAddEventScroll = false;
    const { visible, setVisible, instance } = useAlign(inputRef);

    useEffect(() => {
        const currentLabel = React.Children.map(props.children, child => {
            if (child.props.value === value) return child.props.label;
        });
        setLabel(currentLabel[0]);
    }, [props.children])

    useEffect(() => {
        const container = containerId ? document.querySelector(`#${containerId}`) : window;
        container.addEventListener('scroll', bindScroll);
        inputRef.current.addEventListener('mouseenter', bindMouseenter);
        inputRef.current.addEventListener('mouseleave', bindMouseleave);
        instance.addEventListener('mouseenter', bindMouseenter);
        instance.addEventListener('mouseleave', bindMouseleave);
        document.body.addEventListener('click', bindChangeVisible);
        return () => {
            container.removeEventListener('scroll', bindScroll);
            inputRef.current.removeEventListener('mouseenter', bindMouseenter);
            inputRef.current.removeEventListener('mouseleave', bindMouseleave);
            instance.removeEventListener('mouseenter', bindMouseenter);
            instance.removeEventListener('mouseleave', bindMouseleave);
            document.body.removeEventListener('click', bindChangeVisible);
        }
    }, []) 

    function bindScroll() {
        setVisible(false);
    }

    function bindMouseenter() {
        canAddEventScroll = true;
    }

    function bindMouseleave() {
        canAddEventScroll = false;
    }

    function bindChangeVisible() {
        if (canAddEventScroll) return;
        setVisible(false);
    }

    function handleClick() {
        setVisible(true);
    }

    function handleSelect(data) {
        setValue(data.value);
        setLabel(data.label);
        if (props.onChange) {
            props.onChange(data);
        }
        canAddEventScroll = false;
        setVisible(false);
    }

    return (
        <div className={className}>
            <input
                defaultValue={label}
                readOnly 
                id={`a${Math.floor(Math.random())}`} 
                onClick={handleClick} 
                ref={inputRef}/>
            {
                (visible? ReactDOM.createPortal(
                    React.Children.map(props.children, child => (
                        React.cloneElement(child, { handleSelect, defaultValue: value })
                    )), 
                    instance) : null)
            }
        </div>
    )
}

export const Options = (props) => {
    const [ selected, setSelected ] = useState(false);
    const { label, value, className = '', handleSelect, defaultValue } = props;
    useEffect(() => {
        if (defaultValue === value) {
            setSelected(true);
        }
    }, [value, defaultValue])
    return (
        <div className={`${className} ${selected ? 'selected': ''}`} onClick={() => handleSelect({value, label})}>{label}</div>
    )
}