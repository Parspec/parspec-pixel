import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box } from '../Box';
import { Button } from '../Button';
export const ModalFooter = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, isLoading, helperText }) => {
    return (_jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: 'center' }, { children: [_jsx(Box, { children: helperText }, void 0), _jsxs(Box, Object.assign({ display: 'flex', gap: 2 }, { children: [_jsx(Button, Object.assign({ color: "secondary", variant: "outlined", onClick: onReject }, { children: cancelButtonLabel }), void 0), _jsx(Button, Object.assign({ color: "primary", variant: "contained", onClick: onAccept, isLoading: isLoading }, { children: continueButtonLabel }), void 0)] }), void 0)] }), void 0));
};
ModalFooter.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit',
    onAccept: () => { },
    onReject: () => { },
    isLoading: false,
    helperText: _jsx(_Fragment, {}, void 0)
};
//# sourceMappingURL=ModalFooter.js.map