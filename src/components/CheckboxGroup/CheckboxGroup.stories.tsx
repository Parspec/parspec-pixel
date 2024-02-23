import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CheckboxGroup } from './index';
import React, { useState } from 'react';
import { Box } from '../Box';

export default {
    title: 'CheckboxGroup',
    component: CheckboxGroup,
    argTypes: {
        onChange: { action: 'onChange' },
        error: {
            control: 'boolean'
        },
        helperText: {
            control: 'text'
        },
        color: {
            control: 'radio',
            options: ['primary', 'secondary', 'tertiary']
        },
        showSelectAll: {
            control: 'boolean'
        }
    }
} as ComponentMeta<typeof CheckboxGroup>;

const options = [
    { name: 'female', label: 'Female', checked: true },
    { name: 'male', label: 'Male', checked: false },
    { name: 'other', label: 'Other', checked: false }
];

export const index: ComponentStory<typeof CheckboxGroup> = (args) => {
    const [checkboxOptions, setCheckboxOptions] = useState(options);

    const handleOnChange = (name, checked) => {
        const newState = checkboxOptions.map((option) => {
            if (option.name === name) {
                return { ...option, checked };
            }
            return { ...option };
        });
        console.log(checked, name, newState);
        setCheckboxOptions(newState);
    };

    return (
        <Box>
            <CheckboxGroup {...args} options={checkboxOptions} onChange={handleOnChange} />
        </Box>
    );
};

index.args = {
    label: 'Checkbox group',
    size: 'small'
};
