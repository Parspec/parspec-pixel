import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from '../Box';
import { BodySmall } from '../Typography';
import { ModalHeader } from './';

export default {
    title: 'ModalHeader',
    component: ModalHeader
} as ComponentMeta<typeof ModalHeader>;

export const Header: ComponentStory<typeof ModalHeader> = ({ title, onClose, children }) => {
    return (
        <Box width={'70%'} m={'auto auto'}>
            <ModalHeader title={title} onClose={onClose}>
                {children}
            </ModalHeader>
        </Box>
    );
};
Header.args = {
    children: (
        <Box bgcolor={'primary.main'} display="flex" justifyContent="center">
            <BodySmall>Children Section</BodySmall>
        </Box>
    ),
    title: 'Modal Header',
    onClose: () => {}
};
