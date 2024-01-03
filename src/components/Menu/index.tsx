import React, { useState } from 'react';
import { IconButton, Menu as MuiMenu, MenuProps } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { MoreVertIcon } from '../Icons';

interface MProps extends Pick<MenuProps, 'anchorOrigin' | 'transformOrigin'> {
    options: {
        label: string;
        onClick: () => void;
        color?: string;
        disabled?: boolean;
    }[];
    children?: any;
}

export const Menu = ({ options, children, anchorOrigin, transformOrigin }: MProps) => {
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
            {children ? (
                React.cloneElement(children, { onClick: handleClick })
            ) : (
                <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
            )}
            <MuiMenu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transformOrigin={transformOrigin} anchorOrigin={anchorOrigin}>
                {options.map(({ label, onClick, color, disabled }) => (
                    <MenuItem
                        sx={{ ...(color && { color }) }}
                        key={label}
                        onClick={() => {
                            onClick();
                            handleClose();
                        }}
                        disabled={disabled}
                    >
                        {label}
                    </MenuItem>
                ))}
            </MuiMenu>
        </>
    );
};

Menu.defaultProps = {
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
    }
};
