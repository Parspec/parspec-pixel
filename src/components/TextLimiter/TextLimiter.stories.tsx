import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextLimiter } from './';
import { Box } from '../Box';
import { BodyMedium } from '../Typography';

export default {
    title: 'TextLimiter',
    component: TextLimiter
} as ComponentMeta<typeof TextLimiter>;

export const Basic: ComponentStory<typeof TextLimiter> = (args) => {
    return (
        <>
            <Box bgcolor={'primary.main'} width="600px" m={4}>
                <BodyMedium>
                    <TextLimiter {...args} />
                </BodyMedium>
            </Box>
            <Box bgcolor={'primary.main'} width="200px" m={4}>
                <BodyMedium>
                    <TextLimiter {...args} />
                </BodyMedium>
            </Box>
        </>
    );
};

Basic.args = {
    tooltip: 'Body Big Body Big Body Big Body Big Body Big',
    text: 'Body Big Body Big Body Big Body Big Body Big Body Big'
};
