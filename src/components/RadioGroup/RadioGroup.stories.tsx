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

const Template: ComponentStory<typeof RadioGroup> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(() => event.target.value);
    };

    return <RadioGroup {...args} onChange={handleOnChange} value={selectedValue} />;
};

export const radioGroupRow = Template.bind({});

radioGroupRow.args = {
    name: 'test-feature-1',
    row: true,
    options: [
        { value: 'female', label: 'Female', helper: <Box>Hello</Box> },
        { value: 'male', label: 'Male' },
        { value: 'other', label: 'Other' }
    ],
    label: 'Gender'
};

export const radioGroupColumn = Template.bind({});

radioGroupColumn.args = {
    name: 'test-feature-2',
    options: [
        { value: 'apple', label: 'Apple' },
        { value: 'orange', label: 'Orange' },
        { value: 'mango', label: 'Mango' }
    ],
    label: 'Fruits'
};
