import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumb } from './';
import { BodyMedium } from '../Typography';

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
    ],
    typography: <BodyMedium color="secondary">Breadcrumb</BodyMedium>,
    color: 'text.primary',
    seperator: '>',
    label: 'bewadcrumb'
};
