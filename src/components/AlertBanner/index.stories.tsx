import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AlertBanner } from './';

export default {
    title: 'AlertBanner',
    component: AlertBanner,
    argTypes: { onClose: { action: 'onClose' } }
} as ComponentMeta<typeof AlertBanner>;

export const Basic: ComponentStory<typeof AlertBanner> = (args) => <AlertBanner {...args} />;

Basic.args = {
    variant: 'filled',
    children: 'Basic',
    text: 'Hellooo',
    severity: 'warning'
};
