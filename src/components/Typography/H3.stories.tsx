import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H3 } from './';

export default {
    title: 'Typography/H3',
    component: H3
} as ComponentMeta<typeof H3>;

const Template: ComponentStory<typeof H3> = (args) => <H3 {...args} />;

export const h3 = Template.bind({});

h3.args = {
    children: 'h3 headline',
    textTransform: 'capitalize'
};
