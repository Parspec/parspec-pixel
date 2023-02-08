import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '../Box';
import { Button } from '../Button';
export const Footer = ({ onAccept, onReject, cancelButtonLabel, continueButtonLabel, isLoading }) => {
    return (_jsxs(Box, Object.assign({ display: "flex", justifyContent: "end", gap: 2 }, { children: [_jsx(Button, Object.assign({ color: "secondary", variant: "outlined", onClick: onReject }, { children: cancelButtonLabel })), _jsx(Button, Object.assign({ color: "primary", variant: "contained", onClick: onAccept, isLoading: isLoading }, { children: continueButtonLabel }))] })));
};
Footer.defaultProps = {
    cancelButtonLabel: 'Cancel',
    continueButtonLabel: 'Submit',
    onAccept: () => { },
    onReject: () => { },
    isLoading: false
};
//# sourceMappingURL=Footer.js.map