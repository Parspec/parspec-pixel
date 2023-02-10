import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup } from './';
import { Box } from '@mui/material';

export default {
    title: 'RadioGroup',
    component: RadioGroup,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof RadioGroup>;

export const RadioGroupRow: ComponentStory<typeof RadioGroup> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(() => event.target.value);
    };

    return <RadioGroup {...args} onChange={handleOnChange} value={selectedValue} />;
};

RadioGroupRow.args = {
    name: 'test-feature-1',
    row: true,
    options: [
        { value: 'female', label: 'Female', helper: <Box>Hello</Box> },
        { value: 'male', label: 'Male' },
        { value: 'other', label: 'Other' }
    ],
    label: 'Gender'
};

export const RadioGroupColumn: ComponentStory<typeof RadioGroup> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(() => event.target.value);
    };

    return <RadioGroup {...args} onChange={handleOnChange} value={selectedValue} />;
};

RadioGroupColumn.args = {
    name: 'test-feature-2',
    options: [
        { value: 'apple', label: 'Apple' },
        { value: 'orange', label: 'Orange' },
        { value: 'mango', label: 'Mango' }
    ],
    label: 'Fruits'
};
