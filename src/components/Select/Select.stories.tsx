import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select, SelectChangeEvent } from './index';

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

    const handleOnChange = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value as string);
    };

    return (
        <Select {...args} onChange={handleOnChange} value={selectedValue}>
            {args.children && args.children}
        </Select>
    );
};

export const select = Template.bind({});

select.args = {
    options: [
        { value: 10, displayText: 'Ten' },
        { value: 20, displayText: 'Twenty' },
        { value: 30, displayText: 'Thirty' }
    ],
    label: 'Age',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select'
};

export const selectAutoWidth = Template.bind({});

selectAutoWidth.args = {
    options: [
        { value: 20, displayText: 'Twenty' },
        { value: 21, displayText: 'Twenty one' },
        { value: 22, displayText: 'Twenty one and a half' }
    ],
    label: 'Numbers',
    labelId: 'demo-simple-select-autowidth-label',
    id: 'demo-simple-select-autowidth',
    autoWidth: true
};
