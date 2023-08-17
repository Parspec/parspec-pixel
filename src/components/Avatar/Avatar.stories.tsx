import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './index';
import { Box } from '../Box';

export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: { onClick: { action: 'onClick' } }
} as ComponentMeta<typeof Avatar>;

export const Basic: ComponentStory<typeof Avatar> = (args) => (
    <Avatar
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1686&q=80"
        alt={'Hrishi'}
    />
);

export const LetterAvatars: ComponentStory<typeof Avatar> = (args) => (
    <Box display={'flex'} gap={2}>
        <Avatar>A</Avatar>
        <Avatar>B</Avatar>
        <Avatar>C</Avatar>
    </Box>
);
