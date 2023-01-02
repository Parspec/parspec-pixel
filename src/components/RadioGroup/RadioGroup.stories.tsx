import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioGroup } from './index';

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

    return (
        <RadioGroup {...args} onChange={handleOnChange} value={selectedValue}>
            {args.children && args.children}
        </RadioGroup>
    );
};

export const radioGroupRow = Template.bind({});

radioGroupRow.args = {
    name: 'test-feature-1',
    row: true,
    options: [
        { value: 'female', displayText: 'Female' },
        { value: 'male', displayText: 'Male' },
        { value: 'other', displayText: 'Other' }
    ],
    title: 'Gender'
};

export const radioGroupColumn = Template.bind({});

radioGroupColumn.args = {
    name: 'test-feature-2',
    options: [
        { value: 'apple', displayText: 'Apple' },
        { value: 'orange', displayText: 'Orange' },
        { value: 'mango', displayText: 'Mango' }
    ],
    title: 'Fruits'
};
