var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { default as MUIModal } from '@mui/material/Modal';
import { Box } from '../Box';
import { ModalContainerStyle } from './ModalStyles';
import { forwardRef } from 'react';
export const Modal = forwardRef((_a, ref) => {
    var { open, onClose, children, header, footer, keepMounted } = _a, rest = __rest(_a, ["open", "onClose", "children", "header", "footer", "keepMounted"]);
    return (_jsx(MUIModal, Object.assign({ keepMounted: keepMounted, open: open, onClose: onClose }, rest, { ref: ref }, { children: _jsxs(Box, Object.assign({ sx: ModalContainerStyle }, { children: [_jsx(Box, Object.assign({ width: "100%", pb: 2 }, { children: header })), _jsx(Box, Object.assign({ width: "100%", pb: 1 }, { children: children })), _jsx(Box, Object.assign({ width: "100%", mt: "auto", pt: 4 }, { children: footer }))] })) })));
});
Modal.defaultProps = {
    header: _jsx(_Fragment, {}),
    footer: _jsx(_Fragment, {}),
    children: _jsx(_Fragment, {})
};
//# sourceMappingURL=Modal.js.map