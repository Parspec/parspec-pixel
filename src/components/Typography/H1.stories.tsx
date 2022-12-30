import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Typography} from './';

export default {
    title: 'Typography/H1',
    component: Typography.H1,
} as ComponentMeta<typeof Typography.H1>;

const Template: ComponentStory<typeof Typography.H1> = (args) => (
        <Typography.H1 {...args} />
);

export const h1 = Template.bind({});
h1.args = {
  children: 'h1 headline',
  textTransform: 'capitalize',
};

