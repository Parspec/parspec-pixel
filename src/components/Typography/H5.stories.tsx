import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/H5',
    component: Typography.H5,
} as ComponentMeta<typeof Typography.H5>;

const Template: ComponentStory<typeof Typography.H5> = (args) => (
        <Typography.H5 {...args} />
);

export const h5 = Template.bind({});

h5.args = {
  children: 'h5 headline',
  textTransform: 'capitalize',
};

