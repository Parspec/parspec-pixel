import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/H3',
    component: Typography.H3,
} as ComponentMeta<typeof Typography.H3>;

const Template: ComponentStory<typeof Typography.H3> = (args) => (
        <Typography.H3 {...args} />
);

export const h3 = Template.bind({});

h3.args = {
  children: 'h3 headline',
  textTransform: 'capitalize',
};

