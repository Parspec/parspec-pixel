import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinearProgress } from './';
import { BodyMedium } from '../Typography';
import { Box } from '../Box';

export default {
    title: 'LinearProgress',
    component: LinearProgress,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof LinearProgress>;

export const Basic: ComponentStory<typeof LinearProgress> = (args) => {
    const [progress, setProgress] = React.useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <LinearProgress {...args} value={progress} />
            <Box sx={{ minWidth: 35 }}>
                <BodyMedium color="tertiary">{`${Math.round(progress)}%`}</BodyMedium>
            </Box>
        </>
    );
};

Basic.args = {
    color: 'tertiary',
    variant: 'determinate'
};
