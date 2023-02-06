import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { IconButton, Menu as MuiMenu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { MenuIcon } from '../Icons';
export const Menu = ({ options }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, Object.assign({ onClick: handleClick }, { children: _jsx(MenuIcon, {}) })), _jsx(MuiMenu, Object.assign({ id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose }, { children: options.map(({ label, onClick }) => (_jsx(MenuItem, Object.assign({ onClick: () => {
                        onClick();
                        handleClose();
                    } }, { children: label }), label))) }))] }));
};
//# sourceMappingURL=index.js.map