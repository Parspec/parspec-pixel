import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '@mui/material';

import { Chip } from './index';

export default {
    title: 'Chip',
    component: Chip,
    argTypes: { onClick: { action: 'onClick' }, onDelete: { action: 'onDelete' } }
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} onClick={() => alert('I was clicked !!')} onDelete={() => alert('I was deleted :(')} />;

export const basic = Template.bind({});

basic.args = {
    variant: 'outlined',
    label: 'Basic'
};

export const clickable = Template.bind({});

clickable.args = {
    label: 'Clickable',
    component: 'a',
    href: 'https://mui.com/material-ui/react-chip/#basic-chip',
    clickable: true
};

export const avatarChip = Template.bind({});

avatarChip.args = {
    label: 'Avatar',
    avatar: <Avatar>A</Avatar>
};
