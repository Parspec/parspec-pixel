import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/BodySmall',
    component: Typography.BodySmall,
    argTypes: {
      fontWeight: { type: 'number' }
    }
} as ComponentMeta<typeof Typography.BodySmall>;

const Template: ComponentStory<typeof Typography.BodySmall> = (args) => (
        <Typography.BodySmall {...args} />
);

export const bodySmall = Template.bind({});
bodySmall.args = {
  children: 'Body Small',
  textTransform: 'capitalize',
};