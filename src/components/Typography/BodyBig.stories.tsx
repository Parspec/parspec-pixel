import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/BodyBig',
    component: Typography.BodyBig,
    argTypes: {
    color: { control: 'color' },
    },
} as ComponentMeta<typeof Typography.BodyBig>;

const Template: ComponentStory<typeof Typography.BodyBig> = (args) => (
        <Typography.BodyBig {...args} />
);

export const bodyBig = Template.bind({});
bodyBig.args = {
  children: 'Some Text',
  textTransform: 'capitalize',
  lineHeight: 2,
  letterSpacing: 5,
  fontWeight: 500,
};