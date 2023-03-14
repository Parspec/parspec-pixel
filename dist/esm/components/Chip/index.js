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
import { default as MUIChip } from '@mui/material/Chip';
import { forwardRef } from 'react';
export const Chip = forwardRef((_a, ref) => {
    var { label } = _a, rest = __rest(_a, ["label"]);
    return _jsx(MUIChip, Object.assign({ ref: ref, label: label }, rest));
});
Chip.defaultProps = {
    variant: 'outlined'
};
//# sourceMappingURL=index.js.map