import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomRadioGroup } from './';
import { Box } from '@mui/material';

export default {
    title: 'CustomRadioGroup',
    component: CustomRadioGroup,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof CustomRadioGroup>;

export const RadioGroupCustom: ComponentStory<typeof CustomRadioGroup> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(() => event.target.value);
    };

    return <CustomRadioGroup {...args} onChange={handleOnChange} value={selectedValue} />;
};

const options = [
    { value: 'female', label: '', helper: <Box>Hello</Box> },
    { value: 'male', label: '' },
    { value: 'other', label: '' }
];

RadioGroupCustom.args = {
    name: 'test-feature-1',
    options: options,
    label: 'Gender',
    size: 'small',
    gap: 10
};
