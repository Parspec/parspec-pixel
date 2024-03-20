import { useState } from 'react';

import ColorPicker from './ColorPicker/ColorPicker';
import { IconButton } from '../IconButton';
import { Popover } from '@mui/material';
import { Box } from '../Box';
import { FormatTextColorIcon } from '../Icons';

interface IDropdownColorPickerProps {
    color: string;
    onChange?: (color: string, skipHistoryStack: boolean) => void;
}

export default function DropdownColorPicker({ color, onChange }: IDropdownColorPickerProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton onClick={handleClick}>
                <FormatTextColorIcon color="secondary" />
            </IconButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
            >
                <ColorPicker color={color} onChange={onChange} />
            </Popover>
        </Box>
    );
}
