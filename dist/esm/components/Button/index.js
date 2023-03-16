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
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { default as MUIButton } from '@mui/material/Button';
import { CircularProgress } from '../CircularProgress';
export const Button = forwardRef((_a, ref) => {
    var { disabled, isLoading, color } = _a, rest = __rest(_a, ["disabled", "isLoading", "color"]);
    return (_jsx(MUIButton, Object.assign({ ref: ref }, rest, { color: color, sx: disabled || isLoading ? { opacity: 0.5, pointerEvents: 'none' } : {}, startIcon: isLoading ? _jsx(CircularProgress, { color: 'inherit', size: "1rem" }, void 0) : null }), void 0));
});
Button.defaultProps = {
    color: 'primary',
    variant: 'contained',
    isLoading: false
};
//# sourceMappingURL=index.js.map