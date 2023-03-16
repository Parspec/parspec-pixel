"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const IconButton_1 = require("../IconButton");
const Icons_1 = require("../Icons");
const Typography_1 = require("../Typography");
const Box_1 = require("../Box");
const ModalHeader = ({ title, onClose, children }) => {
    return (jsx_runtime_1.jsxs(Box_1.Box, { children: [jsx_runtime_1.jsxs(Box_1.Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: "center" }, { children: [jsx_runtime_1.jsx(Typography_1.BodyBig, Object.assign({ textTransform: 'capitalize', fontWeight: 600 }, { children: title }), void 0), jsx_runtime_1.jsx(IconButton_1.IconButton, Object.assign({ onClick: onClose }, { children: jsx_runtime_1.jsx(Icons_1.CloseIcon, { fontSize: "small" }, void 0) }), void 0)] }), void 0), jsx_runtime_1.jsx(Box_1.Box, { children: children }, void 0)] }, void 0));
};
exports.ModalHeader = ModalHeader;
exports.ModalHeader.defaultProps = {
    children: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0)
};
//# sourceMappingURL=ModalHeader.js.map