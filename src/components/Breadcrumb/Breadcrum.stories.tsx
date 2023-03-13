import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumb } from './';

export default {
    title: 'Breadcrumb',
    component: Breadcrumb
} as ComponentMeta<typeof Breadcrumb>;

export const Basic: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

Basic.args = {
    options: [
        { displaytext: 'Projects', href: '#' },
        { displaytext: 'Walnut Creek Medical Center', href: '#' }
    ]
};
