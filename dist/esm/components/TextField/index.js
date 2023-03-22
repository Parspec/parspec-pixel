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
import { default as MUITextField } from '@mui/material/TextField';
import { forwardRef } from 'react';
export const TextField = forwardRef((_a, ref) => {
    var { variant, color, error, size, label } = _a, rest = __rest(_a, ["variant", "color", "error", "size", "label"]);
    return (_jsx(MUITextField, Object.assign({ fullWidth: true, label: label, ref: ref, size: size, variant: variant, color: color, error: error }, rest)));
});
TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    error: false,
    size: 'small'
};
//# sourceMappingURL=index.js.map