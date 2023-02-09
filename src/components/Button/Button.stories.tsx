import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';

export default {
    title: 'Button',
    component: Button,
    argTypes: { onClick: { action: 'onClick' } }
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Primary.args = {
    variant: 'contained',
    children: 'Primary'
};
