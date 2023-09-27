import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './';

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Select>;

export const Basic: ComponentStory<typeof Select> = (args) => {
    const [selectedValue, setSelectedValue] = useState('10');

    const handleOnChange = (event: any) => {
        setSelectedValue(event.target.value + '');
        console.log(selectedValue);
    };

    return <Select {...args} onChange={handleOnChange} value={selectedValue} />;
};

const options = [
    { value: 10, label: 'Ten' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' }
];

Basic.args = {
    options: options,
    optionLabelKeyname: 'label',
    optionValueKeyname: 'value',
    label: 'Age',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small',
    helperText: 'invalid input !!',
    color: 'warning'
};
