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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { default as MUITextField } from '@mui/material/TextField';
import styled from '@mui/material/styles/styled';
import { forwardRef } from 'react';
import { Box } from '../Box';
import { Chip } from '../Chip';
const StyledMUITextField = styled(MUITextField)({
    '& .MuiFormHelperText-root': {
        marginLeft: '0px'
    }
});
export const TextField = forwardRef((_a, ref) => {
    var { variant, color, error, size, label, chips, onChipDelete, helperText } = _a, rest = __rest(_a, ["variant", "color", "error", "size", "label", "chips", "onChipDelete", "helperText"]);
    return (_jsxs(_Fragment, { children: [_jsx(StyledMUITextField, Object.assign({ fullWidth: true, label: label, ref: ref, size: size, variant: variant, color: color, error: error, helperText: helperText }, rest)), chips && (_jsx(Box, Object.assign({ marginTop: 2, display: "flex", flexWrap: "wrap", rowGap: 1 }, { children: chips.map((chip, index) => (_jsx(Box, Object.assign({ marginRight: 1 }, { children: _jsx(Chip, { label: chip, onDelete: () => onChipDelete(index) }) })))) })))] }));
});
TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    error: false,
    size: 'small'
};
//# sourceMappingURL=index.js.map