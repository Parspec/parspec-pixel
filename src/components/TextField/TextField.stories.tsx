import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './index';

export default {
    title: 'TextField',
    component: TextField,
    argTypes: { onChange: { action: 'onChange' }, onBlur: { action: 'onBlur' } }
} as ComponentMeta<typeof TextField>;

export const basic: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

basic.args = {
    label: 'outlined'
};

export const multiline: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

multiline.args = {
    label: 'multiline',
    multiline: true,
    rows: 4,
    maxRows: 10
};

export const required: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

required.args = {
    required: true,
    label: 'required'
};

export const error: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

error.args = {
    error: true,
    label: 'error',
    helperText: 'invalid input !!'
};
