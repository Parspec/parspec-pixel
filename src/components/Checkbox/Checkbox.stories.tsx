import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './';

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [checked, setChecked] = useState(true);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return <Checkbox {...args} onChange={handleOnChange} checked={checked} />;
};

export const checkbox = Template.bind({});

checkbox.args = {
    label: 'Apple',
    size: 'medium',
    ariaLabel: 'checkbox-demo'
};
