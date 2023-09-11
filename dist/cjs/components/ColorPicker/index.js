"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionsColorPicker = exports.ColorPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_color_1 = require("react-color");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Popper_1 = __importDefault(require("@mui/material/Popper"));
const Fade_1 = __importDefault(require("@mui/material/Fade"));
const ColorPicker = (props) => {
    return (0, jsx_runtime_1.jsx)(react_color_1.SketchPicker, Object.assign({}, props));
};
exports.ColorPicker = ColorPicker;
const TransitionsColorPicker = (props) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { onClick: handleClick, width: 24, height: 24, borderRadius: 100, bgcolor: String(props.color) }), (0, jsx_runtime_1.jsx)(Popper_1.default, Object.assign({ placement: "auto", id: id, open: open, anchorEl: anchorEl, transition: true }, { children: ({ TransitionProps }) => ((0, jsx_runtime_1.jsx)(Fade_1.default, Object.assign({}, TransitionProps, { timeout: 350 }, { children: (0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ sx: { p: 2, bgcolor: 'background.paper' } }, { children: (0, jsx_runtime_1.jsx)(exports.ColorPicker, Object.assign({}, props)) })) }))) }))] }));
};
exports.TransitionsColorPicker = TransitionsColorPicker;
exports.TransitionsColorPicker.defaultProps = {
    color: '#37d67a',
    placement: 'auto'
};
//# sourceMappingURL=index.js.map