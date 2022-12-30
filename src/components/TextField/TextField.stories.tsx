import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './index';

import { ThemeProvider } from '../../theme/ThemeProvider';

export default {
    title: 'TextField',
    component: TextField,
    argTypes: { onChange: { action: 'onChange' }, onBlur: { action: 'onBlur' } }
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
    return (
        <ThemeProvider>
            <TextField {...args} />
        </ThemeProvider>
    );
};

export const standard = Template.bind({});

standard.args = {
    color: 'primary',
    variant: 'standard'
};

export const multiline = Template.bind({});

multiline.args = {
    multiline: true,
    rows: 4,
    maxRows: 10,
    variant: 'outlined'
};

export const disabled = Template.bind({});

disabled.args = {
    disabled: true,
    placeholder: 'this is disabled text'
};

export const required = Template.bind({});

required.args = {
    required: true,
    placeholder: 'required field'
};

export const error = Template.bind({});

error.args = {
    error: true,
    placeholder: 'hello world'
};
