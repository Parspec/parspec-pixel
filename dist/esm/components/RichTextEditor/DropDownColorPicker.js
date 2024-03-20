import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ColorPicker from './ColorPicker/ColorPicker';
import { IconButton } from '../IconButton';
import { Popover } from '@mui/material';
import { Box } from '../Box';
import { FormatTextColorIcon } from '../Icons';
export default function DropdownColorPicker({ color, onChange }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (_jsxs(Box, { children: [_jsx(IconButton, Object.assign({ onClick: handleClick }, { children: _jsx(FormatTextColorIcon, { color: "secondary" }) })), _jsx(Popover, Object.assign({ open: Boolean(anchorEl), anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left'
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left'
                } }, { children: _jsx(ColorPicker, { color: color, onChange: onChange }) }))] }));
}
//# sourceMappingURL=DropDownColorPicker.js.map