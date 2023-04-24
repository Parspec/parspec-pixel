import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Snackbar } from './Snackbar';

export default {
    title: 'Snackbar',
    component: Snackbar
} as ComponentMeta<typeof Snackbar>;

export const Basic: ComponentStory<typeof Snackbar> = (props) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar open={true} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={3000} onClose={() => setOpen(false)} message="This is a Parspec Snackbar" />
        </>
    );
};
