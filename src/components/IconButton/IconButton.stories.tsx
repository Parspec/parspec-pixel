import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '.';
import { CloseIcon } from '../Icons';

export default {
    title: 'IconButton',
    component: IconButton,
    argTypes: { onClick: { action: 'onClick' } }
} as ComponentMeta<typeof IconButton>;

export const CloseIconButton: ComponentStory<typeof IconButton> = (args) => (
    <IconButton>
        <CloseIcon />
    </IconButton>
);
