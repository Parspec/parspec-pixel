import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';

import { Button } from './';

export default {
    title: 'Button',
    component: Button,
    argTypes: { onClick: { action: 'onClick' } }
} as ComponentMeta<typeof Button>;

export const PrimaryTest: ComponentStory<typeof Button> = (args) => (
    <>
        <Box m={2}>
            <Button {...args} variant="contained" children="Completed" color="primary" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="contained" children="Completed" color="secondary" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="contained" children="Completed" color="tertiary" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="contained" children="Completed" color="success" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="contained" children="Completed" color="warning" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="contained" children="Completed" color="error" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="outlined" children="Completed" color="primary" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="outlined" children="Completed" color="secondary" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="outlined" children="Completed" color="tertiary" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="outlined" children="Completed" color="success" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="outlined" children="Completed" color="warning" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="outlined" children="Completed" color="error" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="text" children="Completed" color="primary" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="text" children="Completed" color="secondary" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="text" children="Completed" color="tertiary" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="text" children="Completed" color="success" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="text" children="Completed" color="warning" size="small" />
        </Box>
        <Box m={2}>
            {' '}
            <Button {...args} variant="text" children="Completed" color="error" size="small" />
        </Box>
    </>
);

export const Primary: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Primary.args = {
    variant: 'contained',
    children: 'Completed',
    color: 'primary',
    size: 'small'
};

export const PrimaryWithLoader: ComponentStory<typeof Button> = (args) => <Button {...args} />;

PrimaryWithLoader.args = {
    variant: 'contained',
    children: 'Basic',
    color: 'primary',
    size: 'small',
    isLoading: true
};

export const Secondary: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Secondary.args = {
    variant: 'contained',
    children: 'Basic',
    color: 'secondary',
    size: 'small'
};

export const Tertiary: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Tertiary.args = {
    variant: 'contained',
    children: 'Basic',
    color: 'tertiary',
    size: 'small'
};

export const PrimaryOutlined: ComponentStory<typeof Button> = (args) => <Button {...args} />;

PrimaryOutlined.args = {
    variant: 'outlined',
    children: 'Basic',
    color: 'primary',
    size: 'small'
};

export const SecondaryOutlined: ComponentStory<typeof Button> = (args) => <Button {...args} />;

SecondaryOutlined.args = {
    variant: 'outlined',
    children: 'Basic',
    color: 'secondary',
    size: 'small'
};

export const TertiaryOutlined: ComponentStory<typeof Button> = (args) => <Button {...args} />;

TertiaryOutlined.args = {
    variant: 'outlined',
    children: 'Basic',
    color: 'tertiary',
    size: 'small'
};

export const TertiaryText: ComponentStory<typeof Button> = (args) => <Button {...args} />;

TertiaryText.args = {
    variant: 'text',
    children: 'Basic',
    color: 'tertiary',
    size: 'small'
};
