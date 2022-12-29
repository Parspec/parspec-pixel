import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Typography} from './';

export default {
    title: 'Typography/H2',
    component: Typography.H2,
    argTypes: {
    // color: { control: 'color' },
    },
} as ComponentMeta<typeof Typography.H2>;

const Template: ComponentStory<typeof Typography.H2> = (args) => (
        <Typography.H2 {...args} />
);

export const h2 = Template.bind({});
h2.args = {
  children: 'Some Text'
};

