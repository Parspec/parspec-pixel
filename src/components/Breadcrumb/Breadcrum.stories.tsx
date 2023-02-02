import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumb } from './';

export default {
    title: 'Breadcrumb'
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const breadcrumb = Template.bind({});

breadcrumb.args = {
    options: [
        { displaytext: 'Link1', href: '#' },
        { displaytext: 'Link2', href: '#' },
        { displaytext: 'Link3', href: '#' }
    ]
};
