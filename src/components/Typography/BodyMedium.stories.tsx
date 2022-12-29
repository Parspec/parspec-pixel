import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/BodyMedium',
    component: Typography.BodyMedium,
} as ComponentMeta<typeof Typography.BodyMedium>;

const Template: ComponentStory<typeof Typography.BodyMedium> = (args) => (
        <Typography.BodyMedium {...args} />
);

export const bodyMedium = Template.bind({});
bodyMedium.args = {
  children: 'Some Text',
  color: 'primary',
  textTransform: 'uppercase',
  lineHeight: 2,
  letterSpacing: 5,
  fontWeight: 1000,
};