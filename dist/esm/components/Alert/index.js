import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box } from '../Box';
import { Alert } from '@mui/material';
import { CloseIcon } from '../Icons';
export const AlertBanner = ({ color, onClose, children, text, variant, severity }) => {
    return (_jsx(Alert, Object.assign({ onClose: onClose, color: color, variant: variant, severity: severity, sx: {
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            height: 20,
            '& .MuiAlert-icon': {
                marginRight: 2
            }
        }, action: _jsxs(Box, Object.assign({ display: "flex", alignItems: "center", gap: 2, paddingBottom: 1, paddingRight: 2 }, { children: [children, _jsx(CloseIcon, { onClick: onClose, sx: { cursor: 'pointer' } })] })) }, { children: _jsx(Box, { children: text }) })));
};
AlertBanner.defaultProps = {
    color: 'warning',
    onClose: () => { },
    text: 'You need to enter custom message',
    variant: 'filled',
    children: _jsx(_Fragment, {}),
    severity: 'warning'
};
//# sourceMappingURL=index.js.map