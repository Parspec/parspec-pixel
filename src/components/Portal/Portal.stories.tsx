import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Portal } from './';
import { Box } from '../Box';

export default {
    title: 'Portal',
    component: Portal
} as ComponentMeta<typeof Portal>;

export const Basic: ComponentStory<typeof Portal> = (props) => {
    return (
        <>
            <Portal {...props}>
                <Box>
                    But I actually render
                    {props?.disablePortal ? 'In the DOM hierarchy' : 'In the document.body hierarchy'}!
                </Box>
            </Portal>
        </>
    );
};

Basic.args = {
    disablePortal: false
};
