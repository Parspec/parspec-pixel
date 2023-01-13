import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H6 } from './';

export default {
    title: 'Typography/H6',
    component: H6
} as ComponentMeta<typeof H6>;

const Template: ComponentStory<typeof H6> = (args) => <H6 {...args} />;

export const h6 = Template.bind({});

h6.args = {
    children: 'h6 heading',
    textTransform: 'capitalize'
};
