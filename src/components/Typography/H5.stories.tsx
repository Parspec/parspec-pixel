import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H5 } from './';

export default {
    title: 'Typography/H5',
    component: H5
} as ComponentMeta<typeof H5>;

const Template: ComponentStory<typeof H5> = (args) => <H5 {...args} />;

export const h5 = Template.bind({});

h5.args = {
    children: 'h5 headline',
    textTransform: 'capitalize'
};
