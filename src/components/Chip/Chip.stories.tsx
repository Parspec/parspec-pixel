import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '@mui/material';

import { Chip } from './index';

export default {
    title: 'Chip',
    component: Chip,
    argTypes: { onClick: { action: 'onClick' }, onDelete: { action: 'onDelete' } }
} as ComponentMeta<typeof Chip>;

export const basic: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

basic.args = {
    variant: 'outlined',
    label: 'Basic'
};

export const avatarChip: ComponentStory<typeof Chip> = (args) => <Chip {...args} onClick={() => alert('I was clicked !!')} onDelete={() => alert('I was deleted :(')} />;

avatarChip.args = {
    label: 'Avatar',
    avatar: <Avatar>A</Avatar>
};
