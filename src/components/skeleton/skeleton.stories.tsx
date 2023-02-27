import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Skeleton } from './';

export default {
    title: 'Skeleton',
    component: Skeleton
} as ComponentMeta<typeof Skeleton>;

export const Basic: ComponentStory<typeof Skeleton> = (props) => {
    return <Skeleton {...props} />;
};
Basic.args = {
    variant: 'rectangular',
    width: 374,
    height: 40
};
