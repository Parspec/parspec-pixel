"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const Icons_1 = require("../Icons");
const Menu = ({ options }) => {
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ onClick: handleClick }, { children: (0, jsx_runtime_1.jsx)(Icons_1.MoreVertIcon, {}) })), (0, jsx_runtime_1.jsx)(material_1.Menu, Object.assign({ id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose }, { children: options.map(({ label, onClick }) => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ onClick: () => {
                        onClick();
                        handleClose();
                    } }, { children: label }), label))) }))] }));
};
exports.Menu = Menu;
//# sourceMappingURL=index.js.map