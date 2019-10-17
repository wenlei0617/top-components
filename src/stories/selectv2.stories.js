import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Select from '../components/selectv2';

storiesOf('Components/selectv2', module).add(
    'selectv2',
    withInfo('123')(() => {
        // const [ list, setList ] = React.useState([]);
        // setTimeout(() => {
        //     setList([
        //         { label: '第一', value: 1 },
        //         { label: '第二', value: 2 } 
        //     ])
        // }, 3000);
        let list = [
                { label: '第一', value: 1 },
                { label: '第二', value: 2 } 
            ];
        return (
            <div>
                <div style={{height: '200px'}}></div>
                <Select.Select defaultValue={2}>
                    {
                        list.map(n => (
                            <Select.Item key={n.value} label={n.label} value={n.value}></Select.Item>
                        ))
                    }
                </Select.Select>
                <div id="test" style={{height: '150px',overflow: 'auto', background: 'red'}}>
                    <div style={{height: '100px'}}></div>
                    <Select.Select containerId="test">
                        <Select.Item label="1" value="1"></Select.Item>
                        <Select.Item label="2" value="2"></Select.Item>
                        <Select.Item label="3" value="3"></Select.Item>
                    </Select.Select>
                    <div style={{height: '100px'}}></div>
                </div>
                {/* <Select.Select>
                    <Select.Item label="1" value="1"></Select.Item>
                    <Select.Item label="2" value="2"></Select.Item>
                    <Select.Item label="3" value="3"></Select.Item>
                </Select.Select>
                <div id="test1" style={{height: '150px',overflow: 'hidden', background: 'red', marginTop: '30px'}}>
                    <div style={{height: '100px'}}></div>
                    <Select.Select containerId="test1">
                        <Select.Item label="1" value="1"></Select.Item>
                        <Select.Item label="2" value="2"></Select.Item>
                        <Select.Item label="3" value="3"></Select.Item>
                    </Select.Select>
                    <div style={{height: '100px'}}></div>
                </div> */}
                <div style={{height: '300px'}}></div>
            </div>
        )
    })
)