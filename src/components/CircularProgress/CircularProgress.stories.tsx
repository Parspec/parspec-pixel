import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircularProgress } from '.';

export default {
    title: 'CircularProgress',
    component: CircularProgress
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

export const circularProgress = Template.bind({});

circularProgress.args = {
    color: 'primary',
    size: 20
};
