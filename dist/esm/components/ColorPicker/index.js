import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Box } from '../Box';
import { CustomPopper, Fade } from '../Popper';
export const ColorPicker = (props) => {
    return _jsx(SketchPicker, Object.assign({}, props));
};
export const TransitionsColorPicker = (props) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
    return (_jsxs(_Fragment, { children: [_jsx(Box, { sx: { cursor: 'pointer' }, onClick: handleClick, width: 24, height: 24, borderRadius: 100, bgcolor: String(props.color) }), _jsx(CustomPopper, Object.assign({ disablePortal: true, placement: "auto", id: id, open: open, anchorEl: anchorEl, transition: true }, { children: ({ TransitionProps }) => (_jsx(Fade, Object.assign({}, TransitionProps, { timeout: 350 }, { children: _jsx(Box, Object.assign({ sx: { p: 2, bgcolor: 'background.paper' } }, { children: _jsx(ColorPicker, Object.assign({}, props)) })) }))) }))] }));
};
TransitionsColorPicker.defaultProps = {
    color: '#37d67a'
};
//# sourceMappingURL=index.js.map