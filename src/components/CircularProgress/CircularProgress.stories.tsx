import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircularProgress } from '.';
import { Button } from '../Button';

export default {
    title: 'CircularProgress',
    component: CircularProgress
} as ComponentMeta<typeof CircularProgress>;

export const Basic: ComponentStory<typeof CircularProgress> = (args) => (
    <>
        <CircularProgress {...args} />
    </>
);

Basic.args = {
    color: 'primary',
    size: 'sm',
    thickness: 'xs'
};
