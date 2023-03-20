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
import { default as MUICheckbox } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
export const Checkbox = (_a) => {
    var { label } = _a, rest = __rest(_a, ["label"]);
    return _jsx(FormControlLabel, { control: _jsx(MUICheckbox, Object.assign({}, rest), void 0), label: label }, void 0);
};
Checkbox.defaultProps = {
    size: 'small',
    color: 'tertiary'
};
//# sourceMappingURL=index.js.map