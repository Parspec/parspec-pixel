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

export const checkbox: ComponentStory<typeof Checkbox> = (args) => {
    const [checked, setChecked] = useState(true);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return <Checkbox {...args} onChange={handleOnChange} checked={checked} />;
};

checkbox.args = {
    label: 'Apple',
    size: 'small'
};
