import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Snackbar } from './Snackbar';
import { SnackbarContent } from './SnackbarContent';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../Icons';

export default {
    title: 'Snackbar',
    component: Snackbar
} as ComponentMeta<typeof Snackbar>;

export const Basic: ComponentStory<typeof Snackbar> = (props) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        console.log('clicked');

        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );
    return (
        <>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose} action={action} message="This is a Parspec Snackbar" />
        </>
    );
};
