import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './index';

import { VisibilityIcon } from '../Icons/index';

export default {
    title: 'TextField',
    component: TextField,
    argTypes: { onChange: { action: 'onChange' }, onBlur: { action: 'onBlur' } }
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

Basic.args = {
    label: 'outlined',
    chips: ['one', 'SomelongFormText', 'AnExtralongformtextwhichusermightneed', 'two', 'three', 'another extra long form text which user might need or any long format data ']
};

export const Multiline: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

Multiline.args = {
    label: 'multiline',
    multiline: true,
    rows: 4,
    maxRows: 10
};

export const Required: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

Required.args = {
    required: true,
    label: 'required'
};

export const Error: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

Error.args = {
    error: true,
    label: 'error',
    helperText: 'invalid input !!'
};
export const WithIcon: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

WithIcon.args = {
    label: 'outlined',
    icon: <VisibilityIcon />
};

export const ScrollableChips: ComponentStory<typeof TextField> = (args) => {
    return <TextField {...args} />;
};

ScrollableChips.args = {
    label: 'outlined',
    scrollActive: true,
    scrollAreaHeight: 80,
    chips: [
        'one',
        'SomelongFormTextA',
        'SomelongFormTextB',
        'SomelongFormTextC',
        'SomelongFormTextD',
        'sometext',
        'AnExtralongformtextwhichusermightneed',
        'two',
        'three',
        'SomelongFormText',
        'djfn',
        'SomelongFormText',
        'skdjbfksdjbfksd',
        'sdjfn',
        'another extra long form text which user might need or any long format data '
    ]
};
