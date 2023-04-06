import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';

import { Button } from './';

export default {
    title: 'Button',
    component: Button,
    argTypes: { onClick: { action: 'onClick' } }
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Primary.args = {
    variant: 'contained',
    children: 'Completed',
    color: 'primary',
    size: 'small'
};

export const PrimaryWithLoader: ComponentStory<typeof Button> = (args) => <Button {...args} />;

PrimaryWithLoader.args = {
    variant: 'contained',
    children: 'Basic',
    color: 'primary',
    size: 'small',
    isLoading: true
};

export const Secondary: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Secondary.args = {
    variant: 'contained',
    children: 'Basic',
    color: 'secondary',
    size: 'small'
};

export const Tertiary: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Tertiary.args = {
    variant: 'contained',
    children: 'Basic',
    color: 'tertiary',
    size: 'small'
};

export const PrimaryOutlined: ComponentStory<typeof Button> = (args) => <Button {...args} />;

PrimaryOutlined.args = {
    variant: 'outlined',
    children: 'Basic',
    color: 'primary',
    size: 'small'
};

export const SecondaryOutlined: ComponentStory<typeof Button> = (args) => <Button {...args} />;

SecondaryOutlined.args = {
    variant: 'outlined',
    children: 'Basic',
    color: 'secondary',
    size: 'small'
};

export const TertiaryOutlined: ComponentStory<typeof Button> = (args) => <Button {...args} />;

TertiaryOutlined.args = {
    variant: 'outlined',
    children: 'Basic',
    color: 'tertiary',
    size: 'small'
};

export const TertiaryText: ComponentStory<typeof Button> = (args) => <Button {...args} />;

TertiaryText.args = {
    variant: 'text',
    children: 'Basic',
    color: 'tertiary',
    size: 'small'
};
