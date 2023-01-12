import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CloseIcon } from '../Icons';
import { Typography } from '../Typography';
import { IconButton } from '@mui/material';
import { Box } from '../Box';
export const Header = ({ title, onClose }) => {
    return (_jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: "center" }, { children: [_jsx(Typography.BodyBig, Object.assign({ textTransform: 'capitalize', fontWeight: 600 }, { children: title })), _jsx(IconButton, Object.assign({ onClick: onClose }, { children: _jsx(CloseIcon, { fontSize: "small" }) }))] })));
};
//# sourceMappingURL=Header.js.map