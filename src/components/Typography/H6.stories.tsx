import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/H6',
    component: Typography.H6,
} as ComponentMeta<typeof Typography.H6>;

const Template: ComponentStory<typeof Typography.H6> = (args) => (
        <Typography.H6 {...args} />
);

export const h6 = Template.bind({});

h6.args = {
  children: 'h6 heading',
  textTransform: 'capitalize',
};

