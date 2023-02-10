import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';

export default {
    title: 'Button',
    component: Button,
    argTypes: { onClick: { action: 'onClick' } }
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Basic.args = {
    variant: 'contained',
    children: 'Basic',
    color: 'tertiary',
    size: 'small'
};
