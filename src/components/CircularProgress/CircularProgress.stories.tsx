import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircularProgress } from '.';

export default {
    title: 'CircularProgress',
    component: CircularProgress
} as ComponentMeta<typeof CircularProgress>;

export const circularProgress: ComponentStory<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

circularProgress.args = {
    color: 'primary',
    size: 20,
    thickness: 3.6
};
