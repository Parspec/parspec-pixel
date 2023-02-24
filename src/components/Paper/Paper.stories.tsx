import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../Box';

import { Paper } from './';

export default {
    title: 'Paper',
    component: Paper
} as ComponentMeta<typeof Paper>;

export const Basic: ComponentStory<typeof Paper> = (args) => (
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128
            }
        }}
    >
        <Paper {...args} />
    </Box>
);

Basic.args = {
    variant: 'outlined'
};
