import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './index';
import React from 'react';

export default {
    title: 'Link',
    component: Link
} as ComponentMeta<typeof Link>;

export const PrimaryLink: ComponentStory<typeof Link> = (args) => <Link {...args}> This is MUI Link </Link>;

PrimaryLink.args = {
    href: '#',
    color: 'primary'
};
