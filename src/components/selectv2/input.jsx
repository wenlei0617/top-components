import React, { useRef, useState, useEffect } from 'react';

const Select = (props) => {
    const { defaultValue, onChange, getContainer } = props;

    const inputRef = useRef(null);
    const [ data, setData ] = useState({ value: defaultValue, label: '' });
    // const [ label, setLabel ] = useState('');
    
    function handleClick() {
        // dosomething
    }

    useEffect(() => {
        const currentLabel = React.Children.map(props.children, child => {
            if (child.props.value === data.value) return child.props.label;
        });
        setData(Object.assign({}, { label: currentLabel[0]}, data));
    }, [props.children])

    return (
        <React.Fragment>
            <input 
                defaultValue={label}
                onClick={handleClick}
                ref={inputRef}
                readOnly/>
        </React.Fragment>
    )
}