import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box } from '../Box';
import { Button } from '../Button';
export const ModalFooter = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, isLoading, helperText }) => {
    return (_jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: 'center' }, { children: [_jsx(Box, { children: helperText }), _jsxs(Box, Object.assign({ display: 'flex', gap: 2 }, { children: [_jsx(Button, Object.assign({ color: "secondary", variant: "outlined", onClick: onReject }, { children: cancelButtonLabel })), _jsx(Button, Object.assign({ color: "primary", variant: "contained", onClick: onAccept, isLoading: isLoading }, { children: continueButtonLabel }))] }))] })));
};
ModalFooter.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit',
    onAccept: () => { },
    onReject: () => { },
    isLoading: false,
    helperText: _jsx(_Fragment, {})
};
//# sourceMappingURL=ModalFooter.js.map