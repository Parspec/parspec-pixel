import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { IconButton } from '@mui/material';
import { CloseIcon } from '../Icons';
import { BodyBig } from '../Typography';
import { Box } from '../Box';
export const ModalHeader = ({ title, onClose, children }) => {
    return (_jsxs(Box, { children: [_jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: "center" }, { children: [_jsx(BodyBig, Object.assign({ textTransform: 'capitalize', fontWeight: 600 }, { children: title })), _jsx(IconButton, Object.assign({ onClick: onClose }, { children: _jsx(CloseIcon, { fontSize: "small" }) }))] })), _jsx(Box, { children: children })] }));
};
ModalHeader.defaultProps = {
    children: _jsx(_Fragment, {})
};
//# sourceMappingURL=ModalHeader.js.map