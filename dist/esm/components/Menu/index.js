import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { IconButton, Menu as MuiMenu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { MoreVertIcon } from '../Icons';
export const Menu = ({ options, children, anchorOrigin, transformOrigin }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (_jsxs(_Fragment, { children: [children ? (React.cloneElement(children, { onClick: handleClick })) : (_jsx(IconButton, Object.assign({ onClick: handleClick }, { children: _jsx(MoreVertIcon, {}) }))), _jsx(MuiMenu, Object.assign({ id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, transformOrigin: transformOrigin, anchorOrigin: anchorOrigin }, { children: options.map(({ label, onClick, color, disabled }) => (_jsx(MenuItem, Object.assign({ sx: Object.assign({}, (color && { color })), onClick: () => {
                        onClick();
                        handleClose();
                    }, disabled: disabled }, { children: label }), label))) }))] }));
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
//# sourceMappingURL=index.js.map