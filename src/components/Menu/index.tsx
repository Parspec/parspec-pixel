import { useState } from 'react';
import { IconButton, Menu as MuiMenu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { MenuIcon } from '../Icons';

interface MenuProps {
    options: {
        label: string;
        onClick: () => void;
    }[];
}

export const Menu = ({ options }: MenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <MuiMenu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                {options.map(({ label, onClick }) => (
                    <MenuItem
                        key={label}
                        onClick={() => {
                            onClick();
                            handleClose();
                        }}
                    >
                        {label}
                    </MenuItem>
                ))}
            </MuiMenu>
        </>
    );
};
