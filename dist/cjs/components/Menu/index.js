"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const Icons_1 = require("../Icons");
const Menu = ({ options, children }) => {
    const [anchorEl, setAnchorEl] = react_1.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [children ? (react_1.default.cloneElement(children, { onClick: handleClick })) : (jsx_runtime_1.jsx(material_1.IconButton, Object.assign({ onClick: handleClick }, { children: jsx_runtime_1.jsx(Icons_1.MoreVertIcon, {}, void 0) }), void 0)), jsx_runtime_1.jsx(material_1.Menu, Object.assign({ id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose }, { children: options.map(({ label, onClick }) => (jsx_runtime_1.jsx(MenuItem_1.default, Object.assign({ onClick: () => {
                        onClick();
                        handleClose();
                    } }, { children: label }), label))) }), void 0)] }, void 0));
};
exports.Menu = Menu;
//# sourceMappingURL=index.js.map