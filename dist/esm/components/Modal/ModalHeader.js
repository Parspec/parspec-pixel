import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { IconButton } from '../IconButton';
import { CloseIcon } from '../Icons';
import { BodyBig } from '../Typography';
import { Box } from '../Box';
export const ModalHeader = ({ title, onClose, children }) => {
    return (_jsxs(Box, { children: [_jsxs(Box, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: "center" }, { children: [_jsx(BodyBig, Object.assign({ textTransform: 'capitalize', fontWeight: 600 }, { children: title }), void 0), _jsx(IconButton, Object.assign({ onClick: onClose }, { children: _jsx(CloseIcon, { fontSize: "small" }, void 0) }), void 0)] }), void 0), _jsx(Box, { children: children }, void 0)] }, void 0));
};
ModalHeader.defaultProps = {
    children: _jsx(_Fragment, {}, void 0)
};
//# sourceMappingURL=ModalHeader.js.map