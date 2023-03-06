import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './index';

export default {
    title: 'TextField',
    component: TextField,
    argTypes: { onChange: { action: 'onChange' }, onBlur: { action: 'onBlur' } }
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

Basic.args = {
    label: 'Outlined'
};

export const Multiline: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

Multiline.args = {
    label: 'Multiline',
    multiline: true,
    rows: 4,
    maxRows: 10
};

export const RequiredField: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

RequiredField.args = {
    required: true,
    label: 'Required'
};

export const ErrorField: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

ErrorField.args = {
    error: true,
    label: 'Error',
    helperText: 'Invalid user name'
};
