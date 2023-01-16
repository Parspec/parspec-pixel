import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H2 } from './';

export default {
    title: 'Typography/H2',
    component: H2
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />;

export const h2 = Template.bind({});
h2.args = {
    children: 'h2 headline',
    textTransform: 'capitalize'
};
