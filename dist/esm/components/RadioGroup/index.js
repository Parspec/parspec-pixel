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
import { FormHelperText } from '@mui/material';
import { FormControl } from '../FormControl';
import { Radio } from '../Radio';
import { Box } from '../Box';
export const RadioGroup = forwardRef((_a, ref) => {
    var { options, label, name, size = 'small', error, helperText } = _a, rest = __rest(_a, ["options", "label", "name", "size", "error", "helperText"]);
    return (_jsxs(FormControl, Object.assign({ error: error, ref: ref }, { children: [_jsx(FormLabel, { children: label }), _jsx(MUIRadioGroup, Object.assign({}, rest, { name: name }, { children: options.map((item, index) => (_jsxs(_Fragment, { children: [_jsx(FormControlLabel, { value: item.value, control: _jsx(Radio, { size: size }), label: item.label }, index), item.helper && !rest.row && _jsx(Box, Object.assign({ ml: 8 }, { children: item.helper }))] }))) })), error && _jsx(FormHelperText, { children: helperText })] })));
});
RadioGroup.defaultProps = {
    name: 'radio-group-name-control',
    error: false,
    helperText: ''
};
//# sourceMappingURL=index.js.map