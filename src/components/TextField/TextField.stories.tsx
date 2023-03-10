import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './index';

export default {
    title: 'TextField',
    component: TextField,
    argTypes: { onChange: { action: 'onChange' }, onBlur: { action: 'onBlur' } }
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

export const basic = Template.bind({});

basic.args = {
    label: 'outlined'
};

export const multiline = Template.bind({});

multiline.args = {
    label: 'multiline',
    multiline: true,
    rows: 4,
    maxRows: 10
};

export const required = Template.bind({});

required.args = {
    required: true,
    label: 'required'
};

export const error = Template.bind({});

error.args = {
    error: true,
    label: 'error'
};
