import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/H4',
    component: Typography.H4,
} as ComponentMeta<typeof Typography.H4>;

const Template: ComponentStory<typeof Typography.H4> = (args) => (
        <Typography.H4 {...args} />
);

export const h4 = Template.bind({});

h4.args = {
  children: 'Some Text',
  color: 'primary',
  textTransform: 'uppercase',
  lineHeight: 2,
  letterSpacing: 5,
};

