"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionsColorPicker = exports.ColorPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_color_1 = require("react-color");
const Box_1 = require("../Box");
const Popper_1 = require("../Popper");
const ColorPicker = (props) => {
    return (0, jsx_runtime_1.jsx)(react_color_1.SketchPicker, Object.assign({}, props));
};
exports.ColorPicker = ColorPicker;
const TransitionsColorPicker = (_a) => {
    var { placement = 'auto', disablePortal = false } = _a, props = __rest(_a, ["placement", "disablePortal"]);
    const [open, setOpen] = (0, react_1.useState)(false);
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, { sx: { cursor: 'pointer' }, onClick: handleClick, width: 24, height: 24, borderRadius: 100, bgcolor: String(props.color) }), (0, jsx_runtime_1.jsx)(Popper_1.CustomPopper, Object.assign({ disablePortal: disablePortal, placement: placement, open: open, anchorEl: anchorEl, transition: true }, { children: ({ TransitionProps }) => ((0, jsx_runtime_1.jsx)(Popper_1.Fade, Object.assign({}, TransitionProps, { timeout: 350 }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ sx: { m: 2 } }, { children: (0, jsx_runtime_1.jsx)(exports.ColorPicker, Object.assign({}, props)) })) }))) }))] }));
};
exports.TransitionsColorPicker = TransitionsColorPicker;
exports.TransitionsColorPicker.defaultProps = {
    color: '#37d67a'
};
//# sourceMappingURL=index.js.map