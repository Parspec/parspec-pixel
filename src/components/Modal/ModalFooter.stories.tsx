import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../Box';
import { BodySmall } from '../Typography';
import { ModalFooter } from './';

export default {
    title: 'ModalFooter',
    component: ModalFooter
} as ComponentMeta<typeof ModalFooter>;

export const Footer: ComponentStory<typeof ModalFooter> = (props) => {
    return (
        <Box width={'70%'} m={'auto auto'}>
            <ModalFooter {...props} />
        </Box>
    );
};
Footer.args = {
    onAccept: () => {},
    onReject: () => {},
    isLoading: true,
    helperText: <BodySmall color="error">Invalid username</BodySmall>,
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit'
};
