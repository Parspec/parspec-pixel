import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { H1 } from './';

export default {
    title: 'Typography/H1',
    component: H1
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const h1 = Template.bind({});
h1.args = {
    children: 'h1 headline',
    textTransform: 'capitalize'
};
