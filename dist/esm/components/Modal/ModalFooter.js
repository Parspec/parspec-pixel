import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box } from '../Box';
import { Button } from '../Button';
export const ModalFooter = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, continueButtonColor, isLoading, helperText, disabled }) => {
    return (_jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: 'center' }, { children: [_jsx(Box, { children: helperText }), _jsxs(Box, Object.assign({ display: 'flex', gap: 2 }, { children: [_jsx(Button, Object.assign({ color: "secondary", variant: "outlined", onClick: onReject, disabled: isLoading }, { children: cancelButtonLabel })), _jsx(Button, Object.assign({ color: continueButtonColor, variant: "contained", onClick: onAccept, isLoading: isLoading, disabled: disabled }, { children: continueButtonLabel }))] }))] })));
};
ModalFooter.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Confirm',
    continueButtonColor: 'tertiary',
    onAccept: () => { },
    onReject: () => { },
    isLoading: false,
    helperText: _jsx(_Fragment, {})
};
//# sourceMappingURL=ModalFooter.js.map