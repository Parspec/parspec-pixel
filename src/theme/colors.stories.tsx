import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useTheme } from '@mui/material/styles';

import { Box, BodyMedium } from '../components';

const COLOR_OPTIONS = ['primary', 'secondary', 'tertiary', 'neutral', 'info', 'warning', 'success', 'error'];

const Colors = () => {
    const { palette } = useTheme();
    return (
        <>
            {COLOR_OPTIONS.map((colorKey) => (
                <>
                    <Box width={'100%'} height={'16px'} bgcolor={`${colorKey}.light`} display="flex" p={4}>
                        <BodyMedium color={`${colorKey}.contrastText`} mr={2}>{`${colorKey}.light`}</BodyMedium>
                        <BodyMedium color={`${colorKey}.contrastText`}>{palette[colorKey].light}</BodyMedium>
                    </Box>
                    <Box width={'100%'} height={'16px'} bgcolor={`${colorKey}.main`} display="flex" p={4}>
                        <BodyMedium color={`${colorKey}.contrastText`} mr={2}>{`${colorKey}.main`}</BodyMedium>
                        <BodyMedium color={`${colorKey}.contrastText`}>{palette[colorKey].main}</BodyMedium>
                    </Box>
                    <Box width={'100%'} height={'16px'} bgcolor={`${colorKey}.dark`} display="flex" p={4}>
                        <BodyMedium color={`${colorKey}.contrastText`} mr={2}>{`${colorKey}.dark`}</BodyMedium>
                        <BodyMedium color={`${colorKey}.contrastText`}>{palette[colorKey].dark}</BodyMedium>
                    </Box>
                </>
            ))}
        </>
    );
};

export default {
    title: 'Colors',
    component: Colors
} as ComponentMeta<typeof Colors>;

export const AllColors: ComponentStory<typeof Colors> = () => <Colors />;
