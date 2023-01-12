import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { default as MUIModal } from '@mui/material/Modal';
import { Box } from '../Box';
import { ModalContainerStyle } from './ModalStyles';
export const Modal = ({ open, onClose, children, header, footer }) => {
    return (_jsx(MUIModal, Object.assign({ open: open, onClose: onClose }, { children: _jsxs(Box, Object.assign({ sx: ModalContainerStyle }, { children: [_jsx(Box, Object.assign({ width: '100%', pt: 5, pb: 2 }, { children: header })), _jsx(Box, Object.assign({ width: '100%', pt: 1, pb: 1 }, { children: children })), _jsx(Box, Object.assign({ width: '100%', mt: 'auto', pt: 5, pb: 2 }, { children: footer }))] })) })));
};
Modal.defaultProps = {
    header: _jsx(_Fragment, {}),
    footer: _jsx(_Fragment, {}),
    children: _jsx(_Fragment, {})
};
//# sourceMappingURL=Modal.js.map