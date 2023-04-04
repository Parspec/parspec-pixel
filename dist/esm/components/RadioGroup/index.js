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
import { forwardRef } from 'react';
import { default as MUIRadioGroup } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl } from '@mui/material';
import { Radio } from '../Radio';
import { Box } from '../Box';
export const RadioGroup = forwardRef((_a, ref) => {
    var { options, label, name, size = 'small' } = _a, rest = __rest(_a, ["options", "label", "name", "size"]);
    return (_jsxs(Box, Object.assign({ ref: ref }, { children: [_jsx(FormLabel, { children: label }), _jsx(MUIRadioGroup, Object.assign({}, rest, { name: name }, { children: options.map((item, index) => (_jsxs(_Fragment, { children: [_jsx(FormControlLabel, { value: item.value, control: _jsx(Radio, { size: size }), label: item.label }, index), item.helper && !rest.row && _jsx(Box, Object.assign({ ml: 8 }, { children: item.helper }))] }))) }))] })));
});
export const CustomRadioGroup = forwardRef((_a, ref) => {
    var { options, label, name, size = 'small', gap } = _a, rest = __rest(_a, ["options", "label", "name", "size", "gap"]);
    return (_jsxs(FormControl, Object.assign({ color: "secondary", sx: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }, ref: ref }, { children: [_jsx(FormLabel, { children: label }), _jsx(MUIRadioGroup, Object.assign({ row: true }, rest, { name: name }, { children: options.map((item, index) => (_jsx(Box, Object.assign({ sx: {
                        ml: gap
                    } }, { children: _jsx(FormControlLabel, { value: item.value, control: _jsx(Radio, { size: size }), label: item.label }, index) })))) }))] })));
});
RadioGroup.defaultProps = {
    name: 'radio-group-name-control'
};
CustomRadioGroup.defaultProps = {
    name: 'radio-group-name-control',
    gap: 4
};
//# sourceMappingURL=index.js.map