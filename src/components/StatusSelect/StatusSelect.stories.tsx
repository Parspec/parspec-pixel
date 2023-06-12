import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusSelect } from './';

export default {
    title: 'StatusSelect',
    component: StatusSelect,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof StatusSelect>;

export const Basic: ComponentStory<typeof StatusSelect> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: any) => {
        setSelectedValue(event.target.value + '');
    };

    console.log(selectedValue);

    return <StatusSelect {...args} onChange={handleOnChange} value={selectedValue} />;
};

export const WithLabel: ComponentStory<typeof StatusSelect> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: any) => {
        setSelectedValue(event.target.value + '');
    };

    console.log(selectedValue);

    return <StatusSelect {...args} onChange={handleOnChange} value={selectedValue} />;
};

const options = [
    { value: 10, label: 'Ten', type: 'primary' },
    { value: 20, label: 'Twenty', type: 'success' },
    { value: 30, label: 'Thirty', type: 'tertiary' }
];

Basic.args = {
    options: options,
    optionLabelKeyname: 'label',
    optionValueKeyname: 'value',
    id: 'demo-simple-StatusSelect',
    size: 'small'
};

WithLabel.args = {
    options: options,
    optionLabelKeyname: 'label',
    optionValueKeyname: 'value',
    id: 'demo-simple-StatusSelect',
    label: 'With Label ',
    labelId: 'withLabel'
};
