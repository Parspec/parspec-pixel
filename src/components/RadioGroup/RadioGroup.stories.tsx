import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup } from './';
import { Box } from '@mui/material';
import { BodySmall } from '../Typography';

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

const options = [
    { value: 'female', label: 'Female', helper: <Box>Hello</Box> },
    { value: 'male', label: 'Male' },
    { value: 'other', label: 'Other' }
];

RadioGroupRow.args = {
    name: 'test-feature-1',
    row: true,
    options: options,
    label: 'Gender',
    size: 'small'
};

export const ErrorRadioGroup: ComponentStory<typeof RadioGroup> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(() => event.target.value);
    };

    return <RadioGroup {...args} onChange={handleOnChange} value={selectedValue} />;
};

ErrorRadioGroup.args = {
    name: 'error-feature',
    options: [
        { value: 'female', label: 'Male' },
        { value: 'male', label: 'Female' },
        { value: 'other', label: 'Other' }
    ],
    label: 'Gender',
    size: 'small',
    error: true,
    helperText: '*required'
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
    options: options,
    label: 'Fruits',
    size: 'small'
};

export const BomModalExample: ComponentStory<typeof RadioGroup> = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(() => event.target.value);
    };

    return <RadioGroup {...args} onChange={handleOnChange} value={selectedValue} />;
};

BomModalExample.args = {
    name: 'error-feature',
    options: [
        {
            value: 'schedule',
            label: 'From a product list',
            helper: (
                <BodySmall fontWeight={400} sx={{ color: 'secondary.light', marginTop: -4, marginLeft: -2 }}>
                    Schedule, Quote, Table of Contents, ...
                </BodySmall>
            )
        },
        {
            value: 'package',
            label: 'From an existing submittal package',
            helper: (
                <BodySmall
                    fontWeight={400}
                    sx={{
                        color: 'secondary.light',
                        marginTop: -4,
                        marginLeft: -2,
                        letterSpacing: 0
                    }}
                >
                    Import a package with a product list and datasheets
                </BodySmall>
            )
        },
        { value: 'manual', label: 'Enter details manually' }
    ],

    label: 'How would you like to add products?',
    size: 'small',
    error: false
};
