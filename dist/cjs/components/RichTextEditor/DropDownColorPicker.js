"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownColorPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ColorPicker_1 = __importDefault(require("./ColorPicker/ColorPicker"));
const IconButton_1 = require("../IconButton");
const material_1 = require("@mui/material");
const Box_1 = require("../Box");
const Icons_1 = require("../Icons");
function DropdownColorPicker({ color, onChange }) {
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.IconButton, Object.assign({ onClick: handleClick }, { children: (0, jsx_runtime_1.jsx)(Icons_1.FormatTextColorIcon, { color: "secondary" }) })), (0, jsx_runtime_1.jsx)(material_1.Popover, Object.assign({ open: Boolean(anchorEl), anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left'
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left'
                } }, { children: (0, jsx_runtime_1.jsx)(ColorPicker_1.default, { color: color, onChange: onChange }) }))] }));
}
exports.DropdownColorPicker = DropdownColorPicker;
//# sourceMappingURL=DropDownColorPicker.js.map