import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/BodyXS',
    component: Typography.BodyXS,
} as ComponentMeta<typeof Typography.BodyXS>;

const Template: ComponentStory<typeof Typography.BodyXS> = (args) => (
        <Typography.BodyXS {...args} />
);

export const bodyXS = Template.bind({});
bodyXS.args = {
  children: 'Body Extra Small',
  textTransform: 'capitalize',
};