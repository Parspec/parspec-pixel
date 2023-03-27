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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { default as MUISelect } from '@mui/material/Select';
import styled from '@mui/material/styles/styled';
const StyledFormControl = styled(FormControl, {
    shouldForwardProp(propName) {
        return !(propName === 'borderColor');
    }
})(({ theme, borderColor }) => {
    var _a, _b;
    if (!borderColor) {
        return {};
    }
    const colorValFromTheme = (_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a[borderColor]) === null || _b === void 0 ? void 0 : _b.main;
    return {
        '& label.Mui-focused': {
            color: colorValFromTheme
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: colorValFromTheme
            },
            '&:hover fieldset': {
                borderColor: colorValFromTheme
            },
            '&.Mui-focused fieldset': {
                borderColor: colorValFromTheme
            }
        }
    };
});
export const Select = forwardRef((_a, ref) => {
    var { id, labelId, options, size, label, optionLabelKeyname = 'label', optionValueKeyname = 'value', borderColor } = _a, rest = __rest(_a, ["id", "labelId", "options", "size", "label", "optionLabelKeyname", "optionValueKeyname", "borderColor"]);
    return (_jsxs(StyledFormControl, Object.assign({ fullWidth: true, ref: ref, size: size, borderColor: borderColor }, { children: [_jsx(InputLabel, Object.assign({ id: labelId }, { children: label })), _jsx(MUISelect, Object.assign({}, rest, { labelId: labelId, label: label, id: id }, { children: options.map((item, index) => (_jsx(MenuItem, Object.assign({ value: item[optionValueKeyname] }, { children: item[optionLabelKeyname] }), index))) }))] })));
});
Select.defaultProps = {
    label: 'Select',
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    size: 'small'
};
//# sourceMappingURL=index.js.map