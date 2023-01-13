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
import { default as MUIRadioGroup } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio } from '../Radio';
export const RadioGroup = (_a) => {
    var { options, label, name } = _a, rest = __rest(_a, ["options", "label", "name"]);
    return (_jsxs(_Fragment, { children: [_jsx(FormLabel, { children: label }), _jsx(MUIRadioGroup, Object.assign({}, rest, { name: name }, { children: options.map((item, index) => (_jsx(FormControlLabel, { value: item.value, control: _jsx(Radio, {}), label: item.label }, index))) }))] }));
};
RadioGroup.defaultProps = {
    label: 'Radio Group',
    name: 'radio-group-name-control'
};
//# sourceMappingURL=index.js.map