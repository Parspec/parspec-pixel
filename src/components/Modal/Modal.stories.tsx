import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './';
import { ThemeProvider } from '../../theme/ThemeProvider';
export default {
    title: 'Modal',
    component: Modal,
    argTypes: { onClose: { action: 'onClose' } }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <ThemeProvider>
        <Modal {...args} />
    </ThemeProvider>
);

export const PrimaryModal = Template.bind({});
PrimaryModal.args = {
    open:true
};

