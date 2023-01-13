import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './index';

const log = console.log;

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        onChange: { action: 'onChange' },
        onClose: { action: 'onClose' },
        onOpen: { action: 'onOpen' }
    }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: any) => {
        setSelectedValue(event.target.value as string);
        log(selectedValue);
    };

    return (
        <Select {...args} onChange={handleOnChange} value={selectedValue}>
            {args.children && args.children}
        </Select>
    );
};

export const select = Template.bind({});

const options = [
    { value: 10, displayText: 'Ten' },
    { value: 20, displayText: 'Twenty' },
    { value: 30, displayText: 'Thirty' }
];

select.args = {
    options: options,
    label: 'Age',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    autoWidth: true,
    defaultValue: options[Math.floor(Math.random() * options.length)]['value']
};
