import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H4 } from './';

export default {
    title: 'Typography/H4',
    component: H4
} as ComponentMeta<typeof H4>;

const Template: ComponentStory<typeof H4> = (args) => <H4 {...args} />;

export const h4 = Template.bind({});

h4.args = {
    children: 'h4 headline',
    textTransform: 'capitalize'
};
