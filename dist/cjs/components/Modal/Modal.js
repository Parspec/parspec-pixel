"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Modal_1 = __importDefault(require("@mui/material/Modal"));
const Box_1 = require("../Box");
const ModalStyles_1 = require("./ModalStyles");
const Modal = ({ open, onClose, children, header, footer }) => {
    return (jsx_runtime_1.jsx(Modal_1.default, Object.assign({ open: open, onClose: onClose }, { children: jsx_runtime_1.jsxs(Box_1.Box, Object.assign({ sx: ModalStyles_1.ModalContainerStyle }, { children: [jsx_runtime_1.jsx(Box_1.Box, Object.assign({ width: "100%", pb: 2 }, { children: header }), void 0), jsx_runtime_1.jsx(Box_1.Box, Object.assign({ width: "100%", pb: 1 }, { children: children }), void 0), jsx_runtime_1.jsx(Box_1.Box, Object.assign({ width: "100%", mt: "auto", pt: 4 }, { children: footer }), void 0)] }), void 0) }), void 0));
};
exports.Modal = Modal;
exports.Modal.defaultProps = {
    header: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0),
    footer: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0),
    children: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0)
};
//# sourceMappingURL=Modal.js.map