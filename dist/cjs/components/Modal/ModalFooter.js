"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalFooter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = require("../Box");
const Button_1 = require("../Button");
const ModalFooter = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, isLoading, helperText }) => {
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: 'center' }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, { children: helperText }), (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex', gap: 2 }, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ color: "secondary", variant: "outlined", onClick: onReject }, { children: cancelButtonLabel })), (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ color: "primary", variant: "contained", onClick: onAccept, isLoading: isLoading }, { children: continueButtonLabel }))] }))] })));
};
exports.ModalFooter = ModalFooter;
exports.ModalFooter.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit',
    onAccept: () => { },
    onReject: () => { },
    isLoading: false,
    helperText: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})
};
//# sourceMappingURL=ModalFooter.js.map