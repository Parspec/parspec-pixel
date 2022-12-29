import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/BodyXS',
    component: Typography.BodyXS,
    argTypes: {
    color: { control: 'color' },
    },
} as ComponentMeta<typeof Typography.BodyXS>;

const Template: ComponentStory<typeof Typography.BodyXS> = (args) => (
        <Typography.BodyXS {...args} />
);

export const bodyXS = Template.bind({});
bodyXS.args = {
  children: 'Some Text'
};