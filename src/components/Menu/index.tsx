import { ReactNode, useState } from 'react';
import { IconButton, Menu as MuiMenu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { MenuIcon } from '../Icons';

interface ABCProps {
    options: {
        label: string;
        onClick: () => void;
    }[];
    children?: ReactNode;
}

export const Menu = ({ options, children }: ABCProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {children ? (
                children
            ) : (
                <IconButton onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
            )}
            <MuiMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
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
        </div>
    );
};
