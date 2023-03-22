import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { default as MUIModal } from '@mui/material/Modal';
import { Box } from '../Box';
import { ModalContainerStyle } from './ModalStyles';
export const Modal = ({ open, onClose, children, header, footer }) => {
    return (_jsx(MUIModal, Object.assign({ open: open, onClose: onClose }, { children: _jsxs(Box, Object.assign({ sx: ModalContainerStyle }, { children: [_jsx(Box, Object.assign({ width: "100%", pb: 2 }, { children: header }), void 0), _jsx(Box, Object.assign({ width: "100%", pb: 1 }, { children: children }), void 0), _jsx(Box, Object.assign({ width: "100%", mt: "auto", pt: 4 }, { children: footer }), void 0)] }), void 0) }), void 0));
};
Modal.defaultProps = {
    header: _jsx(_Fragment, {}, void 0),
    footer: _jsx(_Fragment, {}, void 0),
    children: _jsx(_Fragment, {}, void 0)
};
//# sourceMappingURL=Modal.js.map