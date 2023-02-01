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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { default as MUISelect } from '@mui/material/Select';
export const Select = (_a) => {
    var { id, labelId, options, label } = _a, rest = __rest(_a, ["id", "labelId", "options", "label"]);
    return (_jsxs(_Fragment, { children: [_jsx(InputLabel, Object.assign({ id: labelId }, { children: label })), _jsx(MUISelect, Object.assign({}, rest, { labelId: labelId, label: label, id: id }, { children: options.map((item, index) => (_jsx(MenuItem, Object.assign({ value: item.value }, { children: item.label }), index))) }))] }));
};
Select.defaultProps = {
    label: 'Select',
    options: [
        { value: 10, label: 'Ten' },
        { value: 20, label: 'Twenty' },
        { value: 30, label: 'Thirty' }
    ],
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select'
};
//# sourceMappingURL=index.js.map