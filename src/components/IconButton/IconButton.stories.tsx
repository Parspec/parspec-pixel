import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '.';
import { CloseIcon } from '../Icons';

export default {
    title: 'IconButton',
    component: IconButton,
    argTypes: { onClick: { action: 'onClick' } }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const CloseIconButton = Template.bind({});
CloseIconButton.args = {
    children: <CloseIcon />
};
