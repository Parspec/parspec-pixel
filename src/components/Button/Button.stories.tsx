import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';
import { ThemeProvider } from '../../theme/ThemeProvider';

export default {
    title: 'Button',
    component: Button,
    argTypes: { onClick: { action: 'onClick' } }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <ThemeProvider>
        <Button {...args} />
    </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    variant: 'contained',
    children: 'Primary'
};
