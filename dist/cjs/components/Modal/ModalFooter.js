"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalFooter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
const Button_1 = require("../Button");
const ModalFooter = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, isLoading, helperText }) => {
    return (jsx_runtime_1.jsxs(Box_1.Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: 'center' }, { children: [jsx_runtime_1.jsx(Box_1.Box, { children: helperText }, void 0), jsx_runtime_1.jsxs(Box_1.Box, Object.assign({ display: 'flex', gap: 2 }, { children: [jsx_runtime_1.jsx(Button_1.Button, Object.assign({ color: "secondary", variant: "outlined", onClick: onReject }, { children: cancelButtonLabel }), void 0), jsx_runtime_1.jsx(Button_1.Button, Object.assign({ color: "primary", variant: "contained", onClick: onAccept, isLoading: isLoading }, { children: continueButtonLabel }), void 0)] }), void 0)] }), void 0));
};
exports.ModalFooter = ModalFooter;
exports.ModalFooter.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit',
    onAccept: () => { },
    onReject: () => { },
    isLoading: false,
    helperText: jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0)
};
//# sourceMappingURL=ModalFooter.js.map