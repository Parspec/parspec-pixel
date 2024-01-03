import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ClickAwayListener, Fade } from '@mui/material';
import { SketchPicker } from 'react-color';
import { Box } from '../Box';
import Popper from '../Popper';
export const ColorPicker = (props) => {
    return _jsx(SketchPicker, Object.assign({}, props));
};
export const TransitionsColorPicker = ({ color, onChange, onClickAway = () => { }, onClick = () => { } }) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
        onClick(open);
    };
    function clickAwayHandler() {
        setOpen(false);
        onClickAway();
    }
    function handleOnColorChange(color) {
        onChange(color);
    }
    return (_jsxs(_Fragment, { children: [_jsx(Box, { sx: { cursor: 'pointer' }, onClick: handleClick, width: 24, height: 24, borderRadius: 100, bgcolor: color }), open && (_jsx(ClickAwayListener, Object.assign({ onClickAway: clickAwayHandler }, { children: _jsx(Box, { children: _jsx(Popper, Object.assign({ placement: "auto", open: open, anchorEl: anchorEl, transition: true }, { children: ({ TransitionProps }) => (_jsx(Fade, Object.assign({}, TransitionProps, { timeout: 350 }, { children: _jsx(Box, Object.assign({ m: 2 }, { children: _jsx(ColorPicker, { color: color, onChange: (color) => handleOnColorChange(color) }) })) }))) })) }) })))] }));
};
TransitionsColorPicker.defaultProps = {
    color: '#37d67a'
};
//# sourceMappingURL=index.js.map