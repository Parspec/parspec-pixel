import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumb } from './';

export default {
    title: 'Breadcrumb',
    component: Breadcrumb
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const breadcrumb = Template.bind({});

breadcrumb.args = {
    options: [
        { displaytext: 'Projects', href: '#' },
        { displaytext: 'Walnut Creek Medical Center', href: '#' }
    ]
};
