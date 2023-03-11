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

export const select: ComponentStory<typeof Select> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: any) => {
        setSelectedValue(event.target.value as string);
        console.log(selectedValue);
    };

    return <Select {...args} onChange={handleOnChange} value={selectedValue} />;
};

const options = [
    { value: 10, label: 'Ten' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' }
];

select.args = {
    options: options,
    optionLabelKeyname: 'label',
    optionValueKeyname: 'value',
    label: 'Age',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small'
};
