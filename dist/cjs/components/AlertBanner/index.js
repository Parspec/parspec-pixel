"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertBanner = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
const material_1 = require("@mui/material");
const Icons_1 = require("../Icons");
const AlertBanner = ({ onClose, children, text, variant, severity }) => {
    return ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ onClose: onClose, variant: variant, severity: severity, sx: {
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            height: 20,
            boxSizing: 'content-box',
            '& .MuiAlert-icon': {
                marginRight: 2
            }
        }, action: (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", alignItems: "center", gap: 2, paddingBottom: 1, paddingRight: 2 }, { children: [children, (0, jsx_runtime_1.jsx)(Icons_1.CloseIcon, { onClick: onClose, sx: { cursor: 'pointer' } })] })) }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, { children: text }) })));
};
exports.AlertBanner = AlertBanner;
exports.AlertBanner.defaultProps = {
    onClose: () => { },
    text: 'You need to enter custom message',
    variant: 'filled',
    children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
    severity: 'warning'
};
//# sourceMappingURL=index.js.map