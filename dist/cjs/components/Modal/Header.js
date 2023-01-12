"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Icons_1 = require("../Icons");
const Typography_1 = require("../Typography");
const material_1 = require("@mui/material");
const Box_1 = require("../Box");
const Header = ({ title, onClose }) => {
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography.BodyBig, Object.assign({ textTransform: 'capitalize', fontWeight: 600 }, { children: title })), (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ onClick: onClose }, { children: (0, jsx_runtime_1.jsx)(Icons_1.CloseIcon, { fontSize: "small" }) }))] })));
};
exports.Header = Header;
//# sourceMappingURL=Header.js.map