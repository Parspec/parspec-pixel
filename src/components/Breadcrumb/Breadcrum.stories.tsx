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
        { displaytext: 'link1', href: '#' },
        { displaytext: 'link2', href: '#' },
        { displaytext: 'link3', href: '#' },
        { displaytext: 'link4', href: '#' }
    ]
};
