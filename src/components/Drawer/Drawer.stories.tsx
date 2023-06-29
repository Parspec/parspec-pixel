import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '../Box';
import { Button } from '../Button';
import { Link } from '../Link';

import { Drawer } from './';

export default {
    title: 'Drawer',
    component: Drawer
} as ComponentMeta<typeof Drawer>;

function getList() {
    return (
        <>
            <Box maxWidth={264} height={'100vh'} display={'flex'} flexDirection={'column'} gap={2}>
                <Box p={4} display={'flex'} gap={4}>
                    <MailIcon />
                    <Link href="#">Option 1</Link>
                </Box>

                <Box p={4} display={'flex'} gap={4}>
                    <InboxIcon />
                    <Link href="#"> Option 2</Link>
                </Box>
            </Box>
        </>
    );
}

export const Basic: ComponentStory<typeof Drawer> = (args) => {
    const [open, setOpen] = useState(false);

    function toggleDrawer() {
        setOpen(true);
    }
    return (
        <>
            <Button onClick={toggleDrawer}>Click me</Button>
            <Drawer open={open} onClose={() => setOpen(false)} {...args}>
                {getList()}
            </Drawer>
        </>
    );
};

Basic.args = {
    anchor: 'left'
};
